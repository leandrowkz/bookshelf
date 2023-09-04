import { ResultBox } from '@/components/ResultBox/ResultBox'
import { useAuthPasswordReset } from '@/hooks/useAuthPasswordReset'
import { TextInput, Button, Group, Anchor, Center, Box, rem, Alert } from '@mantine/core'
import { IconArrowLeft, IconLockQuestion, IconMailForward } from '@tabler/icons-react'
import { AuthBox } from './AuthBox'
import { useRouter } from 'next/router'
import { useStyles } from './PasswordResetSection.styles'

export function PasswordResetSection() {
  const { classes } = useStyles()
  const router = useRouter()
  const { form, error, isLoading, isSuccess, handlePasswordReset } = useAuthPasswordReset()

  if (isSuccess) {
    return (
      <ResultBox
        status="default"
        icon={<IconMailForward size={42} />}
        title="We've sent you an email"
        subtitle="You will receive an email with a magic login link. After logging in through it you will be able to update your password."
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
      icon={<IconLockQuestion size={42} />}
      title="Forgot your password?"
      subtitle="Enter your email to get a reset link"
    >
      <form onSubmit={form.onSubmit(handlePasswordReset)}>
        <TextInput
          label="Your email"
          placeholder="you@email.com"
          required
          data-testid="password-reset-form-email"
          {...form.getInputProps('email')}
        />

        {error && (
          <Alert title="A problem occurred" color="red" mt="lg">
            {error}
          </Alert>
        )}

        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor color="dimmed" size="sm" className={classes.control} href="/auth/sign-in">
            <Center inline>
              <IconArrowLeft size={rem(12)} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control} type="submit" loading={isLoading}>
            Reset password
          </Button>
        </Group>
      </form>
    </AuthBox>
  )
}
