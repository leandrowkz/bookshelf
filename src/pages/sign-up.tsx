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

export default function Page() {
  return (
    <Layout>
      <Container size={460} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Create your account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" href="/sign-in">
            Sign in
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt="lg" radius="md">
          <Group grow mb="md" mt="md">
            <Button leftIcon={<IconBrandGoogle />} variant="default">
              Sign up using with Google
            </Button>
          </Group>

          <Divider label="Or continue with email" labelPosition="center" my="lg" />

          <TextInput label="Name" placeholder="John Doe" required />
          <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <PasswordInput label="Confirm password" placeholder="Your password" required mt="md" />
          <Button fullWidth mt="lg">
            Sign up using email
          </Button>
        </Paper>
      </Container>
    </Layout>
  )
}
