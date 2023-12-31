import type { Book } from '@/types/Book'
import { Text, Flex, Anchor, Badge } from '@mantine/core'
import { BookCover } from '../BookCover/BookCover'
import { useStyles } from './BookItem.styles'

export type BookItemProps = {
  book: Book
}

export function BookItem({ book, ...props }: BookItemProps) {
  const { classes } = useStyles()

  return (
    <Flex {...props} direction="column">
      <Anchor href={`/books/${book.id}`}>
        <BookCover book={book} />
      </Anchor>

      <Flex className={classes.title}>
        <Text weight={500}>{book.title}</Text>
        {book.type === 'ebook' && (
          <Badge
            className={classes.ebookBadge}
            variant="gradient"
            gradient={{ from: 'orange', to: 'red' }}
            size="xs"
          >
            Ebook
          </Badge>
        )}
      </Flex>

      <Text size="sm" color="dimmed">
        {book.authors[0]?.name}
      </Text>
    </Flex>
  )
}
