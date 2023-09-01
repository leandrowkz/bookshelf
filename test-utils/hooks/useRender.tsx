import {
  act,
  render as testingLibraryRender,
  renderHook,
  screen,
  within,
  waitFor,
} from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { useTheme } from '@/hooks/useTheme'

function render(ui: React.ReactNode) {
  const { theme } = useTheme()

  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  })
}

export function useRender() {
  return {
    act,
    render,
    renderHook,
    screen,
    within,
    waitFor,
  }
}
