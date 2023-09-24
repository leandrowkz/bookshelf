import type { PropsWithChildren, ReactNode } from 'react'
import { Paper, Title, Text, ThemeIcon, Box, type BoxProps } from '@mantine/core'

export type AuthBoxProps = BoxProps &
  PropsWithChildren & {
    icon?: ReactNode
    title?: ReactNode
    subtitle?: ReactNode
  }

export function AuthBox({ icon, title, subtitle, children, ...props }: AuthBoxProps) {
  return (
    <Box {...props}>
      {icon && (
        <Box ta="center" mb="md">
          <ThemeIcon size={92} radius="lg" variant="light" data-testid="auth-box-icon">
            {icon}
          </ThemeIcon>
        </Box>
      )}
      {title && (
        <Title ta="center" mb="xs" order={2}>
          {title}
        </Title>
      )}
      {subtitle && (
        <Text c="dimmed" fz="sm" ta="center" mb="md">
          {subtitle}
        </Text>
      )}
      <Paper withBorder shadow="md" p={30} radius="md">
        {children}
      </Paper>
    </Box>
  )
}
