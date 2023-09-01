import { Layout } from '@/components'
import { AuthBox } from '@/components/AuthBox/AuthBox'
import { ButtonAuthGoogle } from '@/components/ButtonAuthGoogle/ButtonAuthGoogle'
import { useAuthSignInWithEmail } from '@/hooks/useAuthSignInWithEmail'
import { TextInput, PasswordInput, Anchor, Group, Button, Divider, Box, Alert } from '@mantine/core'
import { IconBook } from '@tabler/icons-react'
import { useRouter } from 'next/router'

export default function AuthenticationTitle() {
  const router = useRouter()
  const { form, error, isLoading, isSuccess, handleSignIn } = useAuthSignInWithEmail()

  if (isSuccess) {
    router.push('/collections')
  }

  return (
    <Layout>
      <AuthBox
        maw={460}
        mx="auto"
        icon={<IconBook size={42} />}
        title="Welcome back!"
        subtitle={
          <Box>
            Do not have an account yet?{' '}
            <Anchor size="sm" href="/auth/sign-up">
              Create account
            </Anchor>
          </Box>
        }
      >
        <Group grow mb="md">
          <ButtonAuthGoogle label="Sign in with Google" />
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(handleSignIn)}>
          <TextInput
            label="Email"
            placeholder="you@email.com"
            required
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />

          <Group position="apart" mt="md">
            <Anchor href="/auth/password-reset" size="sm">
              Forgot password?
            </Anchor>
          </Group>

          {error && (
            <Alert title="A problem occurred" color="red" mt="lg">
              {error}
            </Alert>
          )}

          <Button fullWidth mt="lg" type="submit" loading={isLoading}>
            Sign in
          </Button>
        </form>
      </AuthBox>
    </Layout>
  )
}
