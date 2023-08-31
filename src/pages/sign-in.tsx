import { Layout } from '@/components'
import AuthBox from '@/components/AuthBox/AuthBox'
import { ButtonAuthGoogle } from '@/components/ButtonAuthGoogle/ButtonAuthGoogle'
import { TextInput, PasswordInput, Anchor, Group, Button, Divider, Box } from '@mantine/core'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { IconBook } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function AuthenticationTitle() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({ email, password })
    router.push('/')
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
            <Anchor size="sm" href="/sign-up">
              Create account
            </Anchor>
          </Box>
        }
      >
        <Group grow mb="md">
          <ButtonAuthGoogle label="Sign in with Google" />
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput
          label="Email"
          placeholder="you@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Group position="apart" mt="md">
          <Anchor href="/password-reset" size="sm">
            Forgot password?
          </Anchor>
        </Group>

        <Button fullWidth mt="lg" onClick={handleLogin}>
          Sign in
        </Button>
      </AuthBox>
    </Layout>
  )
}
