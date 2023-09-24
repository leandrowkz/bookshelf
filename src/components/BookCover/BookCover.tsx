import { Image, type PaperProps, Paper } from '@mantine/core'
import { type Book } from '@/types/Book'
import classes from './BookCover.module.css'
import clsx from 'clsx'

export type BookCoverProps = PaperProps & {
  book: Book
}

export function BookCover({ book, ...props }: BookCoverProps) {
  return (
    <Paper radius="md" {...props} className={clsx(classes.wrapper, props.className)}>
      <Image src={book.cover} alt={book.title} className={classes.cover} fit="fill" height="100%" />
    </Paper>
  )
}
