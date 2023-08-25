import { render, screen } from '@/test-utils/render'
import { BookshelfLogo } from './BookshelfLogo'

test('should render logo correctly', () => {
  render(<BookshelfLogo />)

  expect(screen.getByText('Bookshelf')).toBeVisible()
  expect(screen.getByTestId('logo').getAttribute('href')).toEqual('/')
})
