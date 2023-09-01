import { Layout } from '@/components'
import { AuthBox } from '@/components/AuthBox/AuthBox'
import { createStyles, TextInput, Button, Group, Anchor, Center, Box, rem } from '@mantine/core'
import { IconArrowLeft, IconLockBolt } from '@tabler/icons-react'

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

  return (
    <Layout>
      <AuthBox
        maw={460}
        mx="auto"
        icon={<IconLockBolt size={42} />}
        title="Forgot your password?"
        subtitle="Enter your email to get a reset link"
      >
        <TextInput label="Your email" placeholder="you@email.com" required />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor color="dimmed" size="sm" className={classes.control} href="/auth/sign-in">
            <Center inline>
              <IconArrowLeft size={rem(12)} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Reset password</Button>
        </Group>
      </AuthBox>
    </Layout>
  )
}
