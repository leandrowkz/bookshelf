import { useTheme } from './useTheme'
import { useScreenSize, useRender } from '@/test-utils/index'

jest.unmock('@mantine/hooks')

const { renderHook } = useRender()

test('should have all theme props', () => {
  const { result } = renderHook(useTheme)

  expect(JSON.stringify(result.current)).toMatchInlineSnapshot(
    `"{"theme":{"primaryColor":"violet","fontFamily":"fontFamily","fontSizes":{"xs":"0.694em","sm":"0.833rem","md":"1rem","lg":"1.2rem","xl":"1.44rem"},"spacing":{"xs":"0.75rem","sm":"1rem","md":"1.25rem","lg":"2.5rem","xl":"4rem"},"breakpoints":{"xs":"30em","sm":"48em","md":"64em","lg":"74em","xl":"90em"},"lineHeight":1.5,"defaultRadius":"md","components":{"Button":{"defaultProps":{"size":"md"}},"ActionIcon":{"defaultProps":{"size":"md"}},"Input":{"defaultProps":{"size":"md"}},"TextInput":{"defaultProps":{"size":"md"}},"PasswordInput":{"defaultProps":{"size":"md"}},"Title":{"styles":{"root":{"&:is(h1)":{"margin":0,"marginBlock":"0 !important"}}}},"Menu.Item":{"defaultProps":{"fontSize":"xl"}}},"other":{"headerHeight":"5.625rem","spacing":{"container":"6.25rem"}}}}"`
  )
})

test('should have all theme props', () => {
  const screenSize = useScreenSize()
  screenSize.set('300px')

  const { result } = renderHook(useTheme)

  expect(JSON.stringify(result.current)).toMatchInlineSnapshot(
    `"{"theme":{"primaryColor":"violet","fontFamily":"fontFamily","fontSizes":{"xs":"0.694em","sm":"0.833rem","md":"1rem","lg":"1.2rem","xl":"1.44rem"},"spacing":{"xs":"0.75rem","sm":"1rem","md":"1.25rem","lg":"2.5rem","xl":"4rem"},"breakpoints":{"xs":"30em","sm":"48em","md":"64em","lg":"74em","xl":"90em"},"lineHeight":1.5,"defaultRadius":"md","components":{"Button":{"defaultProps":{"size":"md"}},"ActionIcon":{"defaultProps":{"size":"md"}},"Input":{"defaultProps":{"size":"md"}},"TextInput":{"defaultProps":{"size":"md"}},"PasswordInput":{"defaultProps":{"size":"md"}},"Title":{"styles":{"root":{"&:is(h1)":{"margin":0,"marginBlock":"0 !important"}}}},"Menu.Item":{"defaultProps":{"fontSize":"xl"}}},"other":{"headerHeight":"5.625rem","spacing":{"container":"1.25rem"}}}}"`
  )
})
