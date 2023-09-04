/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRender, useUser } from '@/test-utils'
import { SignInSection } from './SignInSection'

jest.mock('../../hooks/useSupabase', () => ({
  useSupabase: () => ({
    auth: {
      signInWithPassword: (...props: any[]) => mocks.signInWithPassword(...props),
    },
  }),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: (props: any[]) => mocks.routerPush(props),
  }),
}))

const mocks = {
  routerPush: jest.fn(),
  signInWithPassword: jest.fn().mockResolvedValue({ data: 'SESSION' }),
}

const user = useUser()
const { render, screen, act } = useRender()

function getContent() {
  return {
    title: screen.getByText('Welcome back!'),
    subtitle: screen.getByText('Do not have an account yet?'),
    subtitleLink: screen.getByRole('link', { name: 'Create account' }),
    btnGoogle: screen.getByTestId('btn-google'),
    divider: screen.getByText('Or continue with email'),
    forgotPasswordLink: screen.getByText('Forgot password?'),
    formEmail: screen.getByTestId('sign-in-form-email') as HTMLInputElement,
    formPassword: screen.getByTestId('sign-in-form-password'),
    formBtnSubmit: screen.getByRole('button', { name: 'Sign in' }),
  }
}

test('should render properly', () => {
  render(<SignInSection />)

  const {
    title,
    subtitle,
    subtitleLink,
    btnGoogle,
    divider,
    forgotPasswordLink,
    formEmail,
    formPassword,
    formBtnSubmit,
  } = getContent()

  expect(title).toBeVisible()
  expect(subtitle).toBeVisible()
  expect(subtitleLink).toBeVisible()
  expect(subtitleLink.getAttribute('href')).toContain('/auth/sign-up')
  expect(btnGoogle).toBeVisible()
  expect(divider).toBeVisible()
  expect(forgotPasswordLink).toBeVisible()
  expect(forgotPasswordLink.getAttribute('href')).toContain('/auth/password-reset')
  expect(formEmail).toBeVisible()
  expect(formPassword).toBeVisible()
  expect(formBtnSubmit).toBeVisible()
})

test('should display validation errors properly', async () => {
  render(<SignInSection />)

  const { formEmail, formPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formEmail, 'INVALID')
    await user.type(formPassword, '123')
  })

  await user.click(formBtnSubmit)

  expect(screen.getByText('Invalid email')).toBeVisible()
  expect(screen.getByText('Password must be 6 or more characters long')).toBeVisible()
})

test('should success works properly', async () => {
  render(<SignInSection />)

  const { formEmail, formPassword, formBtnSubmit } = getContent()

  await act(async () => {
    await user.type(formEmail, 'me@email.com')
    await user.type(formPassword, '123456')
  })

  await user.click(formBtnSubmit)

  expect(mocks.signInWithPassword).toHaveBeenCalledWith({
    email: 'me@email.com',
    password: '123456',
  })
  expect(mocks.routerPush).toHaveBeenCalledWith('/collections')
})
