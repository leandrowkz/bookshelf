import { useRender } from '@/test-utils/index'
import { useAuthSignOut } from './useAuthSignOut'

jest.mock('@supabase/auth-helpers-react', () => ({
  useSupabaseClient: () => ({
    auth: {
      signOut: mocks.signOut,
    },
  }),
}))

const { renderHook, act, waitFor } = useRender()

const mocks = { signOut: jest.fn().mockResolvedValue({}) }

test('should return props properly', () => {
  const { result } = renderHook(useAuthSignOut)
  const { error, isLoading, isSuccess, handleSignOut } = result.current

  expect(error).toEqual('')
  expect(isLoading).toBeFalsy()
  expect(isSuccess).toBeFalsy()
  expect(handleSignOut).not.toBeUndefined()
})

test('should call supabase signOut with correct values and set state correctly', async () => {
  const { result } = renderHook(useAuthSignOut)

  await act(async () => {
    result.current.handleSignOut()
  })

  expect(mocks.signOut).toHaveBeenCalled()
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeTruthy()
})

test('should set errors properly and update state correctly when supabase fails', async () => {
  mocks.signOut.mockImplementationOnce(() => ({
    error: new Error('MOCK_ERROR_ACTION_FAILED'),
  }))

  const { result } = renderHook(useAuthSignOut)

  await act(async () => {
    result.current.handleSignOut()
  })

  expect(result.current.error).toEqual('MOCK_ERROR_ACTION_FAILED')
  expect(result.current.isLoading).toBeFalsy()
  expect(result.current.isSuccess).toBeFalsy()
})

test('should set loading state properly', async () => {
  const { result } = renderHook(useAuthSignOut)

  act(() => {
    expect(result.current.isLoading).toBeFalsy()
    result.current.handleSignOut()
  })

  await waitFor(async () => expect(result.current.isLoading).toBeTruthy())
  await waitFor(async () => expect(result.current.isLoading).toBeFalsy())
})
