import { Grid, type GridProps } from '@mantine/core'
import type { Book } from '@/types/Book'
import { BookItem } from '../BookItem/BookItem'

export type BookListProps = Omit<GridProps, 'children'> & {
  books: Book[]
}

export function BookList({ books, ...props }: BookListProps) {
  return (
    <Grid {...props} gutter="lg">
      {books.map((book) => (
        <Grid.Col key={`book-${book.id}`} span={{ xs: 4, lg: 2 }}>
          <BookItem book={book} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
