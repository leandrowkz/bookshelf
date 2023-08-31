import { Layout } from '@/components'
import AuthBox from '@/components/AuthBox/AuthBox'
import { ButtonAuthGoogle } from '@/components/ButtonAuthGoogle/ButtonAuthGoogle'
import { TextInput, PasswordInput, Anchor, Group, Button, Divider, Box } from '@mantine/core'
import { IconUsers } from '@tabler/icons-react'

export default function Page() {
  return (
    <Layout>
      <AuthBox
        maw={460}
        mx="auto"
        icon={<IconUsers size={42} />}
        title="Create your account"
        subtitle={
          <Box>
            Already have an account?{' '}
            <Anchor size="sm" href="/sign-in">
              Sign in
            </Anchor>
          </Box>
        }
      >
        <Group grow mb="md">
          <ButtonAuthGoogle label="Sign up using Google" />
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput label="Name" placeholder="John Doe" required />

        <TextInput label="Email" placeholder="you@email.com" required mt="md" />

        <PasswordInput label="Password" placeholder="Your password" required mt="md" />

        <PasswordInput label="Confirm password" placeholder="Your password" required mt="md" />

        <Button fullWidth mt="lg">
          Sign up using email
        </Button>
      </AuthBox>
    </Layout>
  )
}
