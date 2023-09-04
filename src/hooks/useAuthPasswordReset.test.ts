import { useRender } from '@/test-utils/index'
import { useAuthPasswordReset } from './useAuthPasswordReset'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      resetPasswordForEmail: mocks.resetPasswordForEmail,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { resetPasswordForEmail: jest.fn().mockReturnValue({ data: 's' }) }

function getFormValues() {
  return {
    email: 'me@email.com',
  }
}

test('should return props properly', () => {
  const { result } = renderHook(useAuthPasswordReset)
  const { form, error, isLoading, isSuccess, handlePasswordReset } = result.current

  expect(form).not.toBeUndefined()
  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(isSuccess).toBeFalsy()
  expect(handlePasswordReset).not.toBeUndefined()
})

test('should call supabase resetPasswordForEmail with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthPasswordReset)

  const values = getFormValues()

  await act(async () => {
    result.current.handlePasswordReset(values)
  })

  expect(mocks.resetPasswordForEmail).toHaveBeenCalledWith(values.email, {
    redirectTo: 'https://usebookshelf.app/auth/password-update',
  })
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.resetPasswordForEmail.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthPasswordReset)
  const values = getFormValues()

  await act(async () => {
    result.current.handlePasswordReset(values)
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthPasswordReset)
  const values = getFormValues()

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handlePasswordReset(values)
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})

test('should validate form properly', async () => {
  const { result } = renderHook(useAuthPasswordReset)

  act(() => {
    result.current.form.setValues({ email: 'NOT_VALID' })
  })

  act(result.current.form.validate)

  expect(result.current.form.errors).toEqual({
    email: 'Invalid email',
  })
})
