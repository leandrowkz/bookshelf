import { useRender, useMockData } from '@/test-utils'
import { BookCover } from './BookCover'

const { render, screen } = useRender()
const { books } = useMockData()

test('should render cover properly', () => {
  const book = books[0]
  render(<BookCover book={book} />)

  expect(screen.getByRole('img', { name: book.title })).toBeVisible()
})

test('should render properly when no cover', () => {
  const book = books[0]
  book.cover = null
  render(<BookCover book={book} />)

  expect(screen.getByTestId('no-cover')).toBeVisible()
})
