import { Layout } from '@/components'
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
} from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

export default function AuthenticationTitle() {
  return (
    <Layout>
      <Container size={460} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" href="/sign-up">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt="lg" radius="md">
          <Group grow mb="md" mt="md">
            <Button leftIcon={<IconBrandGoogle />} variant="default">
              Sign in with Google
            </Button>
          </Group>

          <Divider label="Or continue with email" labelPosition="center" my="lg" />

          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group position="apart" mt="md">
            <Anchor href="/password-reset" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="lg">
            Sign in
          </Button>
        </Paper>
      </Container>
    </Layout>
  )
}
