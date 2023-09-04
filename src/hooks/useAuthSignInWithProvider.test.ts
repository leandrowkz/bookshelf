import { useRender } from '@/test-utils/index'
import { useAuthSignInWithProvider } from './useAuthSignInWithProvider'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      signInWithOAuth: mocks.signIn,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { signIn: jest.fn().mockResolvedValue({}) }

test('should return props properly', () => {
  const { result } = renderHook(useAuthSignInWithProvider)
  const { error, isLoading, handleSignIn } = result.current

  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(handleSignIn).not.toBeUndefined()
})

test('should call supabase signInWithOAuth with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthSignInWithProvider, { initialProps: 'google' })

  await act(async () => {
    result.current.handleSignIn()
  })

  const payloadExpected = { provider: 'google' }

  expect(mocks.signIn).toHaveBeenCalledWith(payloadExpected)
  expect(result.current.isLoading).toBeFalsy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.signIn.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))
  const { result } = renderHook(useAuthSignInWithProvider)

  await act(async () => {
    result.current.handleSignIn()
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthSignInWithProvider)

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handleSignIn()
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})
