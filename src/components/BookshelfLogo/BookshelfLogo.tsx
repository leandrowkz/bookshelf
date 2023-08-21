import { Title } from '@mantine/core'
import Link from 'next/link'
import { useStyles } from './BookshelfLogo.styles'

export function BookshelfLogo() {
  const { classes } = useStyles()

  return (
    <Link href="/" className={classes.link}>
      <Title order={1}>📓 bookshelf</Title>
    </Link>
  )
}
