import { useRender } from '@/test-utils'
import { DiscoverBooksSection } from './DiscoverBooksSection'

const { screen, render } = useRender()

test('should render content properly', () => {
  render(<DiscoverBooksSection />)

  expect(screen.getByTestId('discover-books-section')).toBeVisible()
})
