import { useRender, useMockData } from '@/test-utils'
import { BookCover } from './BookCover'

const { render, screen } = useRender()
const { books } = useMockData()

test('should render cover properly', () => {
  const book = books[0]
  render(<BookCover book={book} />)

  expect(screen.getByRole('img', { name: book.title })).toBeVisible()
})
