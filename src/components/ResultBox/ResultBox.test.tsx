import { useRender } from '@/test-utils'
import { ResultBox, type ResultBoxProps } from './ResultBox'
import { Button } from '@mantine/core'

const { screen, render } = useRender()

function renderResultBox(props?: ResultBoxProps) {
  return render(<ResultBox title="TITLE_CONTENT" subtitle="SUBTITLE_CONTENT" {...props} />)
}

test('should render content properly', () => {
  renderResultBox()

  expect(screen.getByText('TITLE_CONTENT')).toBeVisible()
  expect(screen.getByText('SUBTITLE_CONTENT')).toBeVisible()
  expect(screen.getByTestId('result-box-icon')).toBeVisible()
  expect(screen.queryByTestId('result-box-actions')).not.toBeInTheDocument()
})

test('should render actions properly', () => {
  const actions = [<Button key="act-1">ACTION 1</Button>, <Button key="act-2">ACTION 2</Button>]
  renderResultBox({ actions })

  expect(screen.getByTestId('result-box-actions')).toBeVisible()
  expect(screen.getAllByRole('button').length).toEqual(2)
})
