import { useTheme } from './useTheme'
import { useScreenSize, useRender } from '@/test-utils/index'

jest.unmock('@mantine/hooks')

const { renderHook } = useRender()

test('should have all theme props', () => {
  const { result } = renderHook(useTheme)

  expect(JSON.stringify(result.current)).toMatchInlineSnapshot()
})

test('should have all theme props', () => {
  const screenSize = useScreenSize()
  screenSize.set('300px')

  const { result } = renderHook(useTheme)

  expect(JSON.stringify(result.current)).toMatchInlineSnapshot()
})
