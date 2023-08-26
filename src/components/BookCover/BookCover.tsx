import { Image, type ImageProps } from '@mantine/core'
import { type Book } from '@/types/Book'
import { useStyles } from './BookCover.styles'
import { IconBook } from '@tabler/icons-react'

export type BookCoverProps = ImageProps & {
  book: Book
}

export function BookCover({ book, ...props }: BookCoverProps) {
  const { classes } = useStyles()

  return (
    <Image
      {...props}
      src={book.cover}
      alt={book.title}
      className={classes.cover}
      fit="fill"
      height="100%"
      placeholder={<IconBook size="30%" stroke={1} data-testid="no-cover" />}
      withPlaceholder
    />
  )
}
