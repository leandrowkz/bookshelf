// import { useState } from 'react';
import { Header as MantineHeader, Group, Burger, Button, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useStyles } from './Header.styles'
import Link from 'next/link'
import { BookshelfieLogo } from '@/components/BookshelfieLogo/BookshelfieLogo'
import { ColorSchemeToggle } from '../ColorSchemaToggle/ColorSchemaToggle'
import { useMenuLinks } from '@/hooks/useMenuLinks'

export function Header() {
  const { header } = useMenuLinks()
  const [opened, { toggle }] = useDisclosure(false)
  // const [active, setActive] = useState(header[0].link);
  const { classes, cx } = useStyles()

  const items = header.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link)}
      // className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
      {link.label}
    </Link>
  ))

  return (
    <MantineHeader height={100} className={classes.mantineHeader}>
      <Box className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />

        <BookshelfieLogo />

        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Group className={classes.social} position="right" noWrap>
          <Button>Sign up</Button>
          <ColorSchemeToggle size="xl" />
        </Group>
      </Box>
    </MantineHeader>
  )
}
