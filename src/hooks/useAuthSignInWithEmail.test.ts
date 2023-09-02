import { useRender } from '@/test-utils/index'
import { useAuthSignInWithEmail } from './useAuthSignInWithEmail'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      signInWithPassword: mocks.signInWithPassword,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { signInWithPassword: jest.fn().mockReturnValue({ data: 's' }) }

function getFormValues() {
  return {
    email: 'user@example.com',
    password: '123456',
  }
}

test('should return props properly', () => {
  const { result } = renderHook(useAuthSignInWithEmail)
  const { form, error, isLoading, isSuccess, handleSignIn } = result.current

  expect(form).not.toBeUndefined()
  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(isSuccess).toBeFalsy()
  expect(handleSignIn).not.toBeUndefined()
})

test('should call supabase signInWithPassword with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthSignInWithEmail)

  const values = getFormValues()

  await act(async () => {
    result.current.handleSignIn(values)
  })

  const payloadExpected = {
    email: values.email,
    password: values.password,
  }

  expect(mocks.signInWithPassword).toHaveBeenCalledWith(payloadExpected)
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.signInWithPassword.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthSignInWithEmail)
  const values = getFormValues()

  await act(async () => {
    result.current.handleSignIn(values)
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthSignInWithEmail)
  const values = getFormValues()

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handleSignIn(values)
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})

test('should validate form properly', async () => {
  const { result } = renderHook(useAuthSignInWithEmail)

  act(() => {
    result.current.form.setValues({
      email: 'invalid',
      password: '123',
    })
  })

  act(result.current.form.validate)

  expect(result.current.form.errors).toEqual({
    email: 'Invalid email',
    password: 'Password must be 6 or more characters long',
  })
})
