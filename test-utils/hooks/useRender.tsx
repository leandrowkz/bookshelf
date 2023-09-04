import { type PropsWithChildren } from 'react'
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

function Wrapper({ children }: PropsWithChildren) {
  const { theme } = useTheme()
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}

function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: PropsWithChildren) => <Wrapper>{children}</Wrapper>,
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
