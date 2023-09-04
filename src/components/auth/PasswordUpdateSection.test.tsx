/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRender, useUser } from '@/test-utils'
import { PasswordUpdateSection } from './PasswordUpdateSection'

jest.mock('../../hooks/useSupabase', () => ({
  useSupabase: () => ({
    auth: {
      updateUser: (...props: any[]) => mocks.updateUser(...props),
    },
  }),
}))

jest.mock('@mantine/notifications', () => ({
  notifications: {
    show: (props: any[]) => mocks.notificationShow(props),
  },
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: (props: any[]) => mocks.pushRouter(props),
  }),
}))

const mocks = {
  pushRouter: jest.fn(),
  notificationShow: jest.fn(),
  updateUser: jest.fn().mockResolvedValue({ data: 'SESSION' }),
}

const user = useUser()
const { render, screen, act } = useRender()

function getContent() {
  return {
    title: screen.getByText('Update your password'),
    subtitle: screen.getByText('Set a new password for accessing Bookshelf'),
    formPassword: screen.getByTestId('password-update-form-password'),
    formConfirmPassword: screen.getByTestId('password-update-form-confirm-password'),
    formBtnSubmit: screen.getByRole('button', { name: 'Set your new password' }),
  }
}

test('should render properly', () => {
  render(<PasswordUpdateSection />)

  const { title, subtitle, formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  expect(title).toBeVisible()
  expect(subtitle).toBeVisible()
  expect(formPassword).toBeVisible()
  expect(formConfirmPassword).toBeVisible()
  expect(formBtnSubmit).toBeVisible()
})

test('should display validation errors properly', async () => {
  render(<PasswordUpdateSection />)

  const { formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formPassword, '123')
    await user.type(formConfirmPassword, 'ABC')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText('Password must be 6 or more characters long')).toBeVisible()
  expect(screen.getByText('Passwords must be equal')).toBeVisible()
})

test('should success works properly', async () => {
  render(<PasswordUpdateSection />)

  const { formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formPassword, '123456')
    await user.type(formConfirmPassword, '123456')
  })

  await user.click(formBtnSubmit)

  expect(mocks.updateUser).toHaveBeenCalledWith({ password: '123456' })
  expect(mocks.notificationShow).toHaveBeenCalledWith(
    expect.objectContaining({
      title: 'Password has been changed!',
      color: 'green',
    })
  )
  expect(mocks.pushRouter).toHaveBeenCalledWith('/collections')
})
