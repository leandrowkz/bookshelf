import { AuthBox } from './AuthBox'
import { useAuthPasswordUpdate } from '@/hooks/useAuthPasswordUpdate'
import { Alert, Button, PasswordInput } from '@mantine/core'
import { IconLockCheck, IconLockCog } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { notifications } from '@mantine/notifications'

export function PasswordUpdateSection() {
  const router = useRouter()
  const { form, error, isLoading, isSuccess, handlePasswordUpdate } = useAuthPasswordUpdate()

  if (isSuccess) {
    notifications.show({
      title: 'Password has been changed!',
      message: `It's always good to keep your profile safe 😉`,
      icon: <IconLockCheck size={14} />,
      color: 'green',
    })
    router.push('/collections')
  }

  return (
    <AuthBox
      maw={460}
      mx="auto"
      icon={<IconLockCog size={42} />}
      title="Update your password"
      subtitle="Set a new password for accessing Bookshelf"
    >
      <form onSubmit={form.onSubmit(handlePasswordUpdate)}>
        <PasswordInput
          label="New password"
          placeholder="Your new password"
          required
          data-testid="password-update-form-password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          label="Confirm"
          placeholder="Confirm new password"
          required
          mt="md"
          data-testid="password-update-form-confirm-password"
          {...form.getInputProps('confirmPassword')}
        />

        {error && (
          <Alert title="A problem occurred" color="red" mt="lg">
            {error}
          </Alert>
        )}

        <Button mt="lg" fullWidth type="submit" loading={isLoading}>
          Set your new password
        </Button>
      </form>
    </AuthBox>
  )
}
