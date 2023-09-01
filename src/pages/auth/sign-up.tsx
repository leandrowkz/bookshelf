import { TextInput, PasswordInput, Anchor, Group, Button, Divider, Box, Alert } from '@mantine/core'
import { IconMailForward, IconUsers } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components'
import { AuthBox } from '@/components/AuthBox/AuthBox'
import { ButtonAuthGoogle } from '@/components/ButtonAuthGoogle/ButtonAuthGoogle'
import { ResultBox } from '@/components/ResultBox/ResultBox'
import { useAuthSignUp } from '@/hooks/useAuthSignUp'

export default function Page() {
  const router = useRouter()
  const { isLoading, isSuccess, form, error, handleSignUp } = useAuthSignUp()

  return (
    <Layout>
      {isSuccess && (
        <ResultBox
          status="default"
          icon={<IconMailForward size={42} />}
          title="We are almost there"
          subtitle="You must confirm the email we just sent you."
          actions={[
            <Button key="button-action" onClick={() => router.push('/')}>
              Go home
            </Button>,
          ]}
        />
      )}
      {!isSuccess && (
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
            <ButtonAuthGoogle label="Sign up using Google" />
          </Group>

          <form onSubmit={form.onSubmit(handleSignUp)}>
            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <TextInput
              label="Name"
              placeholder="John Doe"
              required
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Email"
              placeholder="you@email.com"
              required
              mt="md"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password')}
            />

            <PasswordInput
              label="Confirm password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('confirmPassword')}
            />

            {error && (
              <Alert title="A problem occurred" color="red" mt="lg">
                {error}
              </Alert>
            )}

            <Button fullWidth mt="lg" type="submit" loading={isLoading}>
              Sign up using email
            </Button>
          </form>
        </AuthBox>
      )}
    </Layout>
  )
}
