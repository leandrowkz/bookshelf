import { Layout } from '@/components'
import { AuthBox } from '@/components/AuthBox/AuthBox'
import { ResultBox } from '@/components/ResultBox/ResultBox'
import { useAuthPasswordReset } from '@/hooks/useAuthPasswordReset'
import {
  createStyles,
  TextInput,
  Button,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Alert,
} from '@mantine/core'
import { IconArrowLeft, IconLockBolt, IconMailForward } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

export default function ForgotPassword() {
  const { classes } = useStyles()
  const router = useRouter()
  const { form, error, isLoading, isSuccess, handlePasswordReset } = useAuthPasswordReset()

  return (
    <Layout>
      {isSuccess && (
        <ResultBox
          status="default"
          icon={<IconMailForward size={42} />}
          title="We've sent you an email"
          subtitle="You will receive an email with a magic login link. After logging in through it you will be able to update your password."
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
          icon={<IconLockBolt size={42} />}
          title="Forgot your password?"
          subtitle="Enter your email to get a reset link"
        >
          <form onSubmit={form.onSubmit(handlePasswordReset)}>
            <TextInput
              label="Your email"
              placeholder="you@email.com"
              required
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
      )}
    </Layout>
  )
}
