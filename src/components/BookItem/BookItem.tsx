import type { Book } from '@/types/Book'
import { Image, Text, Flex, Anchor } from '@mantine/core'
import { useStyles } from './BookItem.styles'

export type BookItemProps = {
  book: Book
}

export function BookItem({ book, ...props }: BookItemProps) {
  const { classes } = useStyles()

  return (
    <Flex {...props} direction="column">
      <Anchor href={`/books/${book.id}`}>
        <Image
          src={book.cover}
          alt={book.title}
          withPlaceholder
          className={classes.cover}
          fit="fill"
          height="100%"
        />
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
