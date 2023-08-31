import { useRouter } from 'next/navigation'
import { Avatar, Button, Group, Menu } from '@mantine/core'
import { useAuthUser } from '@/hooks/useAuthUser'
import { IconBook2, IconHeart, IconLockBolt, IconLogout } from '@tabler/icons-react'
import { useAuthSignOut } from '@/hooks/useAuthSignOut'

export function HeaderAuthSection() {
  const router = useRouter()
  const user = useAuthUser()
  const { handleSignOut } = useAuthSignOut()

  const handleClick = async () => {
    await handleSignOut()
    router.push('/')
  }

  if (user) {
    return (
      <Menu shadow="md" position="bottom-end">
        <Menu.Target>
          <Avatar src={user.avatar} size={44} radius="xl" sx={{ cursor: 'pointer' }} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>{user.email}</Menu.Label>
          <Menu.Divider />
          <Menu.Item icon={<IconBook2 />} onClick={() => router.push('/collections')}>
            My collection
          </Menu.Item>
          <Menu.Item icon={<IconHeart />} onClick={() => router.push('/favorites')}>
            Favorites
          </Menu.Item>
          <Menu.Item icon={<IconLockBolt />} onClick={() => router.push('/password-update')}>
            Update password
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" icon={<IconLogout />} onClick={handleClick}>
            Sign out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    )
  }

  return (
    <Group position="right" noWrap>
      <Button onClick={() => router.push('/sign-in')} variant="default">
        Sign in
      </Button>
      <Button onClick={() => router.push('/sign-up')}>Sign up</Button>
    </Group>
  )
}
