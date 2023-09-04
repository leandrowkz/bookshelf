/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRender, useUser } from '@/test-utils'
import { AuthButtonGoogle } from './AuthButtonGoogle'

jest.mock('../../hooks/useSupabase', () => ({
  useSupabase: () => ({
    auth: {
      signInWithOAuth: (...props: any[]) => mocks.signInWithOAuth(...props),
    },
  }),
}))

const mocks = {
  signInWithOAuth: jest.fn().mockResolvedValue({ data: 'SESSION' }),
}

const user = useUser()
const { render, screen } = useRender()

function getButton(label = 'Sign in with Google') {
  return screen.getByRole('button', { name: label })
}

test('should render properly', () => {
  render(<AuthButtonGoogle />)

  expect(getButton()).toBeVisible()
})

test('should success works properly', async () => {
  render(<AuthButtonGoogle />)

  await user.click(getButton())

  expect(mocks.signInWithOAuth).toHaveBeenCalledWith({ provider: 'google' })
})
