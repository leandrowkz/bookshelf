import { useRender } from '@/test-utils/index'
import { useAuthPasswordUpdate } from './useAuthPasswordUpdate'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      updateUser: mocks.updateUser,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { updateUser: jest.fn().mockReturnValue({ data: 's' }) }

function getFormValues() {
  return {
    password: '123456',
    confirmPassword: '123456',
  }
}

test('should return props properly', () => {
  const { result } = renderHook(useAuthPasswordUpdate)
  const { form, error, isLoading, isSuccess, handlePasswordUpdate } = result.current

  expect(form).not.toBeUndefined()
  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(isSuccess).toBeFalsy()
  expect(handlePasswordUpdate).not.toBeUndefined()
})

test('should call supabase updateUser with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthPasswordUpdate)

  const values = getFormValues()

  await act(async () => {
    result.current.handlePasswordUpdate(values)
  })

  const payloadExpected = {
    password: values.password,
  }

  expect(mocks.updateUser).toHaveBeenCalledWith(payloadExpected)
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.updateUser.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthPasswordUpdate)
  const values = getFormValues()

  await act(async () => {
    result.current.handlePasswordUpdate(values)
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthPasswordUpdate)
  const values = getFormValues()

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handlePasswordUpdate(values)
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})

test('should validate form properly', async () => {
  const { result } = renderHook(useAuthPasswordUpdate)

  act(() => {
    result.current.form.setValues({
      password: '123',
      confirmPassword: 'ABC123',
    })
  })

  act(result.current.form.validate)

  expect(result.current.form.errors).toEqual({
    password: 'Password must be 6 or more characters long',
    confirmPassword: 'Passwords must be equal',
  })
})
