import { useRender } from '@/test-utils'
import { BookshelfLogo } from './BookshelfLogo'

const { render, screen } = useRender()

test('should render logo correctly', () => {
  render(<BookshelfLogo />)

  expect(screen.getByText('Bookshelf')).toBeVisible()
  expect(screen.getByTestId('logo').getAttribute('href')).toEqual('/')
})
