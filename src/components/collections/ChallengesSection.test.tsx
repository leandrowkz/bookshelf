import { useRender } from '@/test-utils'
import { ChallengesSection } from './ChallengesSection'

const { screen, render } = useRender()

test('should render content properly', () => {
  render(<ChallengesSection />)

  expect(screen.getByTestId('challenge-card')).toBeVisible()
})
