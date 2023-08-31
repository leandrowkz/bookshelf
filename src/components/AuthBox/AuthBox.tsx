import type { ReactNode } from 'react'
import { Paper, Title, Text, ThemeIcon, Box, type BoxProps } from '@mantine/core'

export type AuthBoxProps = BoxProps & {
  icon?: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
}

export function AuthBox({ icon, title, subtitle, children, ...props }: AuthBoxProps) {
  return (
    <Box {...props}>
      {icon && (
        <Box ta="center" mb="md">
          <ThemeIcon size={92} radius="lg" variant="light">
            {icon}
          </ThemeIcon>
        </Box>
      )}
      {title && (
        <Title align="center" mb="xs" order={2}>
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
