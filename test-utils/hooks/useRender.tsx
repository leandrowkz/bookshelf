import { render as testingLibraryRender, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'

function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  })
}

export function useRender() {
  return {
    render,
    screen,
  }
}
