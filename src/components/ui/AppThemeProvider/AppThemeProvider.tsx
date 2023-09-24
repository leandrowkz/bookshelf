import type { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
export { ColorSchemeScript } from '@mantine/core'
import { useTheme } from '@/hooks/useTheme'
import '@mantine/core/styles.css'
import './AppThemeProvider.css'

export function AppThemeProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme()

  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
