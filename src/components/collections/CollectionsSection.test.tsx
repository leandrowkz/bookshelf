import { useRender } from '@/test-utils'
import { CollectionsSection } from './CollectionsSection'

const { screen, render } = useRender()

test('should render content properly', () => {
  render(<CollectionsSection />)

  expect(screen.getByTestId('collections-section')).toBeVisible()
})
