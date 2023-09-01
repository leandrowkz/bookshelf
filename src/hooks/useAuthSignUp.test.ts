import { useRender } from '@/test-utils/index'
import { useAuthSignUp } from './useAuthSignUp'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      signUp: mocks.signUp,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { signUp: jest.fn().mockReturnValue({ data: 's' }) }

function getFormValues() {
  return {
    name: 'User name',
    email: 'user@example.com',
    password: '123456',
    confirmPassword: '123456',
  }
}

test('should return props properly', () => {
  const { result } = renderHook(useAuthSignUp)
  const { form, error, isLoading, isSuccess, handleSignUp } = result.current

  expect(form).not.toBeUndefined()
  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(isSuccess).toBeFalsy()
  expect(handleSignUp).not.toBeUndefined()
})

test('should set call supabase signUp with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthSignUp)

  const values = getFormValues()

  await act(async () => {
    result.current.handleSignUp(values)
  })

  const payloadExpected = {
    email: values.email,
    options: {
      data: {
        name: values.name,
      },
    },
    password: values.password,
  }

  expect(mocks.signUp).toHaveBeenCalledWith(payloadExpected)
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.signUp.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthSignUp)
  const values = getFormValues()

  await act(async () => {
    result.current.handleSignUp(values)
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set errors properly when user already exists', async () => {
  mocks.signUp.mockImplementationOnce(() => ({
    data: {
      user: {
        identities: [],
      },
    },
  }))
  const { result } = renderHook(useAuthSignUp)
  const values = getFormValues()

  await act(async () => {
    result.current.handleSignUp(values)
  })

  expect(result.current.error).toEqual('USER_ALREADY_EXISTS_WITH_THIS_EMAIL')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set call supabase signUp with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthSignUp)

  const values = getFormValues()

  await act(async () => {
    result.current.handleSignUp(values)
  })

  const payloadExpected = {
    email: values.email,
    options: {
      data: {
        name: values.name,
      },
    },
    password: values.password,
  }

  expect(mocks.signUp).toHaveBeenCalledWith(payloadExpected)
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.signUp.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthSignUp)
  const values = getFormValues()

  await act(async () => {
    result.current.handleSignUp(values)
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthSignUp)
  const values = getFormValues()

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handleSignUp(values)
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})
