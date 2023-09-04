import { useRender } from '@/test-utils'
import { AuthBox } from './AuthBox'

const { render, screen } = useRender()

test('should render properly', () => {
  render(
    <AuthBox title="TITLE" subtitle="SUBTITLE" icon="ICON">
      CHILDREN
    </AuthBox>
  )

  expect(screen.getByText('TITLE')).toBeVisible()
  expect(screen.getByText('SUBTITLE')).toBeVisible()
  expect(screen.getByTestId('auth-box-icon')).toBeVisible()
  expect(screen.getByText('CHILDREN')).toBeVisible()
})
