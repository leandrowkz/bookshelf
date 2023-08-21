import { Text, ActionIcon, Group, Box } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import { useMenuLinks } from '@/hooks/useMenuLinks'
import { useStyles } from './Footer.styles'
import { BookshelfLogo } from '../BookshelfLogo/BookshelfLogo'
import Link from 'next/link'

export function Footer() {
  const { classes } = useStyles()
  const { footer } = useMenuLinks()

  const groups = footer.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Box className={classes.inner}>
        <div className={classes.logo}>
          <BookshelfLogo />
          <Text size="xs" color="dimmed" className={classes.description}>
            Your personal book catalog. With love, for free.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Box>
      <Box className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} Bookshelf. Made with 💜 by{' '}
          <Link href="https://github.com/leandrowkz">@leandrowkz</Link>.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Box>
    </footer>
  )
}
