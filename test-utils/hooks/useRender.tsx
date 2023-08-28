import { render as testingLibraryRender, screen } from '@testing-library/react'
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
    render,
    screen,
  }
}
