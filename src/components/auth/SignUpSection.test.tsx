/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRender, useUser } from '@/test-utils'
import { SignUpSection } from './SignUpSection'

jest.mock('../../hooks/useSupabase', () => ({
  useSupabase: () => ({
    auth: {
      signUp: (...props: any[]) => mocks.signUp(...props),
    },
  }),
}))

const mocks = {
  signUp: jest.fn().mockResolvedValue({ data: 'SESSION' }),
}

const user = useUser()
const { render, screen, act } = useRender()

function getContent() {
  return {
    title: screen.getByText('Create your account'),
    subtitle: screen.getByText('Already have an account?'),
    subtitleLink: screen.getByRole('link', { name: 'Sign in' }),
    btnGoogle: screen.getByTestId('btn-google'),
    divider: screen.getByText('Or continue with email'),
    formName: screen.getByTestId('sign-up-form-name'),
    formEmail: screen.getByTestId('sign-up-form-email') as HTMLInputElement,
    formPassword: screen.getByTestId('sign-up-form-password'),
    formConfirmPassword: screen.getByTestId('sign-up-form-confirm-password'),
    formBtnSubmit: screen.getByRole('button', { name: 'Sign up using email' }),
  }
}

test('should render properly', () => {
  render(<SignUpSection />)

  const {
    title,
    subtitle,
    subtitleLink,
    btnGoogle,
    divider,
    formName,
    formEmail,
    formPassword,
    formConfirmPassword,
    formBtnSubmit,
  } = getContent()

  expect(title).toBeVisible()
  expect(subtitle).toBeVisible()
  expect(subtitleLink).toBeVisible()
  expect(subtitleLink.getAttribute('href')).toContain('/auth/sign-in')
  expect(btnGoogle).toBeVisible()
  expect(divider).toBeVisible()
  expect(formName).toBeVisible()
  expect(formEmail).toBeVisible()
  expect(formPassword).toBeVisible()
  expect(formConfirmPassword).toBeVisible()
  expect(formBtnSubmit).toBeVisible()
})

test('should display validation errors properly', async () => {
  render(<SignUpSection />)

  const { formName, formEmail, formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formName, 'A')
    await user.type(formEmail, 'INVALID')
    await user.type(formPassword, '123')
    await user.type(formConfirmPassword, 'ABC')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText('Name must be 2-10 characters long')).toBeVisible()
  expect(screen.getByText('Invalid email')).toBeVisible()
  expect(screen.getByText('Password must be 6 or more characters long')).toBeVisible()
  expect(screen.getByText('Passwords must be equal')).toBeVisible()
})

test('should display user already exists error properly', async () => {
  mocks.signUp.mockResolvedValueOnce({ data: { user: { identities: [] } } })
  render(<SignUpSection />)

  const { formName, formEmail, formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formName, 'JOHN DOE')
    await user.type(formEmail, 'me@email.com')
    await user.type(formPassword, '123456')
    await user.type(formConfirmPassword, '123456')
  })

  await user.click(formBtnSubmit)

  const link = screen.getByRole('link', { name: 'reset your password' })
  expect(screen.getByText(/An account already exists with this email. Try/i)).toBeVisible()
  expect(link).toBeVisible()
  expect(link.getAttribute('href')).toEqual('/auth/password-reset')
})

test('should success works properly', async () => {
  render(<SignUpSection />)

  const { formName, formEmail, formPassword, formConfirmPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formName, 'JOHN DOE')
    await user.type(formEmail, 'me@email.com')
    await user.type(formPassword, '123456')
    await user.type(formConfirmPassword, '123456')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText('Confirm your email')).toBeVisible()
  expect(
    screen.getByText('We are almost there! You just need to confirm the email we just sent you.')
  ).toBeVisible()
  expect(screen.getByRole('button', { name: 'Go home' })).toBeVisible
  expect(mocks.signUp).toHaveBeenCalledWith({
    email: 'me@email.com',
    password: '123456',
    options: {
      data: {
        name: 'JOHN DOE',
      },
    },
  })
})
