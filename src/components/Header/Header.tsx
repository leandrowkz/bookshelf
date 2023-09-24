import { Group, Burger, Button, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { BookshelfLogo } from '@/components/BookshelfLogo/BookshelfLogo'
import { ColorSchemeToggle } from '../ColorSchemaToggle/ColorSchemaToggle'
import { useMenuLinks } from '@/hooks/useMenuLinks'
import { useRouter, usePathname } from 'next/navigation'
import { HeaderAuthSection } from './HeaderAuthSection'
import classes from './Header.module.css'

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { header } = useMenuLinks()
  const [opened, { toggle }] = useDisclosure(false)

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
    <Box className={classes.mantineHeader}>
      <Box className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <BookshelfLogo />

        <Group className={classes.links} gap={5}>
          {items}
        </Group>

        <Group className={classes.social} wrap="nowrap">
          <HeaderAuthSection />
          <ColorSchemeToggle size="xl" />
        </Group>
      </Box>
    </Box>
  )
}
