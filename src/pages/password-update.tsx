import { Layout } from '@/components'
import AuthBox from '@/components/AuthBox/AuthBox'
import { Button, PasswordInput } from '@mantine/core'
import { IconLockCheck, IconLockCog } from '@tabler/icons-react'

export default function PasswordUpdate() {
  return (
    <Layout>
      <AuthBox
        maw={460}
        mx="auto"
        icon={<IconLockCog size={42} />}
        title="Update your password"
        subtitle="Set a new password for accessing Bookshelf"
      >
        <PasswordInput label="New password" placeholder="Your new password" required />
        <PasswordInput label="Confirm" placeholder="Confirm new password" required mt="md" />
        <Button mt="lg" fullWidth leftIcon={<IconLockCheck />}>
          Set your new password
        </Button>
      </AuthBox>
    </Layout>
  )
}
