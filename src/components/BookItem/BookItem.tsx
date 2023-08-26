import type { Book } from '@/types/Book'
import { Text, Flex, Anchor } from '@mantine/core'
import { BookCover } from '../BookCover/BookCover'

export type BookItemProps = {
  book: Book
}

export function BookItem({ book, ...props }: BookItemProps) {
  return (
    <Flex {...props} direction="column">
      <Anchor href={`/books/${book.id}`}>
        <BookCover book={book} />
      </Anchor>

      <Text weight={500} mt="md" mb="sm">
        {book.title}
      </Text>

      <Text size="sm" color="dimmed">
        {book.authors[0]?.name}
      </Text>
    </Flex>
  )
}
