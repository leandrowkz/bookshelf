import { TextInput, PasswordInput, Anchor, Group, Button, Divider, Box, Alert } from '@mantine/core'
import { IconMailCheck, IconUsers } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { AuthBox } from './AuthBox'
import { ButtonAuthGoogle } from '@/components/ButtonAuthGoogle/ButtonAuthGoogle'
import { ResultBox } from '@/components/ResultBox/ResultBox'
import { useAuthSignUp } from '@/hooks/useAuthSignUp'

export function SignUpSection() {
  const router = useRouter()
  const { isLoading, isSuccess, form, error, handleSignUp } = useAuthSignUp()

  if (isSuccess) {
    return (
      <ResultBox
        status="default"
        icon={<IconMailCheck size={42} />}
        title="Confirm your email"
        subtitle="We are almost there! You just need to confirm the email we just sent you."
        actions={[
          <Button key="button-action" onClick={() => router.push('/')} size="lg">
            Go home
          </Button>,
        ]}
      />
    )
  }

  return (
    <AuthBox
      maw={460}
      mx="auto"
      icon={<IconUsers size={42} />}
      title="Create your account"
      subtitle={
        <Box>
          Already have an account?{' '}
          <Anchor size="sm" href="/auth/sign-in">
            Sign in
          </Anchor>
        </Box>
      }
    >
      <Group grow mb="md">
        <ButtonAuthGoogle label="Sign up using Google" data-testid="btn-google" />
      </Group>

      <form onSubmit={form.onSubmit(handleSignUp)}>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput
          label="Name"
          placeholder="John Doe"
          required
          data-testid="sign-up-form-name"
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Email"
          placeholder="you@email.com"
          required
          mt="md"
          data-testid="sign-up-form-email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          data-testid="sign-up-form-password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          label="Confirm password"
          placeholder="Your password"
          required
          mt="md"
          data-testid="sign-up-form-confirm-password"
          {...form.getInputProps('confirmPassword')}
        />

        {error && (
          <Alert title="A problem occurred" color="red" mt="lg">
            {error === 'USER_ALREADY_EXISTS_WITH_THIS_EMAIL' ? (
              <Box>
                An account already exists with this email. Try{' '}
                <Anchor href="/auth/password-reset">reset your password</Anchor>.
              </Box>
            ) : (
              error
            )}
          </Alert>
        )}

        <Button fullWidth mt="lg" type="submit" loading={isLoading}>
          Sign up using email
        </Button>
      </form>
    </AuthBox>
  )
}
