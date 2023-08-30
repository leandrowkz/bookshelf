import { Header as MantineHeader, Group, Burger, Button, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useStyles } from './Header.styles'
import { BookshelfLogo } from '@/components/BookshelfLogo/BookshelfLogo'
import { ColorSchemeToggle } from '../ColorSchemaToggle/ColorSchemaToggle'
import { useMenuLinks } from '@/hooks/useMenuLinks'
import { useRouter, usePathname } from 'next/navigation'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { header } = useMenuLinks()
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  const items = header.map((link) => {
    const isActive = pathname === link.link

    return (
      <Button
        variant={isActive ? 'light' : 'subtle'}
        key={link.label}
        onClick={() => router.push(link.link)}
      >
        {link.label}
      </Button>
    )
  })

  return (
    <MantineHeader height={theme.other.headerHeight} className={classes.mantineHeader}>
      <Box className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <BookshelfLogo />

        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Group className={classes.social} position="right" noWrap>
          <Button onClick={() => router.push('/sign-in')} variant="subtle">
            Sign in
          </Button>
          <Button onClick={() => router.push('/sign-up')}>Sign up</Button>
          <ColorSchemeToggle size="xl" />
        </Group>
      </Box>
    </MantineHeader>
  )
}
