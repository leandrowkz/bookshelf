/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRender, useUser } from '@/test-utils'
import { PasswordResetSection } from './PasswordResetSection'

jest.mock('../../hooks/useSupabase', () => ({
  useSupabase: () => ({
    auth: {
      resetPasswordForEmail: (...props: any[]) => mocks.resetPasswordForEmail(...props),
    },
  }),
}))

const mocks = {
  resetPasswordForEmail: jest.fn().mockResolvedValue({ data: 'SESSION' }),
}

const user = useUser()
const { render, screen, act } = useRender()

function getContent() {
  return {
    title: screen.getByText('Forgot your password?'),
    subtitle: screen.getByText('Enter your email to get a reset link'),
    formEmail: screen.getByTestId('password-reset-form-email'),
    formBtnBack: screen.getByRole('link', { name: 'Back to the login page' }),
    formBtnSubmit: screen.getByRole('button', { name: 'Reset password' }),
  }
}

test('should render properly', () => {
  render(<PasswordResetSection />)

  const { title, subtitle, formEmail, formBtnBack, formBtnSubmit } = getContent()

  expect(title).toBeVisible()
  expect(subtitle).toBeVisible()
  expect(formEmail).toBeVisible()
  expect(formBtnBack).toBeVisible()
  expect(formBtnBack.getAttribute('href')).toEqual('/auth/sign-in')
  expect(formBtnSubmit).toBeVisible()
})

test('should display validation errors properly', async () => {
  render(<PasswordResetSection />)

  const { formEmail, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formEmail, 'INVALID')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText('Invalid email')).toBeVisible()
})

test('should success works properly', async () => {
  render(<PasswordResetSection />)

  const { formEmail, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formEmail, 'me@example.com')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText(`We've sent you an email`)).toBeVisible()
  expect(
    screen.getByText(
      'You will receive an email with a magic login link. After logging in through it you will be able to update your password.'
    )
  ).toBeVisible()
  expect(screen.getByRole('button', { name: 'Go home' })).toBeVisible()
  expect(mocks.resetPasswordForEmail).toHaveBeenCalledWith('me@example.com', {
    redirectTo: 'https://usebookshelf.app/auth/password-update',
  })
})
