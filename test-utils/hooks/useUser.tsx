import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

export function useUser() {
  return user
}
