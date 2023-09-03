import type { ReactNode } from 'react'
import { Title, Text, ThemeIcon, Box, type BoxProps, useMantineTheme, Flex } from '@mantine/core'
import {
  IconAlertTriangle,
  IconChecks,
  IconInfoCircle,
  IconInfoSquareRoundedFilled,
  IconX,
} from '@tabler/icons-react'

export type ResultBoxProps = BoxProps & {
  status: 'default' | 'info' | 'error' | 'warning' | 'success'
  title?: ReactNode
  subtitle?: ReactNode
  actions?: ReactNode[]
  icon?: ReactNode
}

export function ResultBox({
  status = 'default',
  title,
  subtitle,
  actions,
  icon,
  ...props
}: ResultBoxProps) {
  const theme = useMantineTheme()

  const map = {
    default: {
      icon: <IconInfoSquareRoundedFilled size={42} />,
      color: theme.primaryColor,
    },
    error: {
      color: 'red',
      icon: <IconX size={42} />,
    },
    warning: {
      color: 'orange',
      icon: <IconAlertTriangle size={42} />,
    },
    success: {
      color: 'green',
      icon: <IconChecks size={42} />,
    },
    info: {
      color: 'blue',
      icon: <IconInfoCircle size={42} />,
    },
  }

  const iconMapped = map[status] || map.default

  return (
    <Box maw={460} mx="auto" {...props}>
      <Box ta="center" mb="md">
        <ThemeIcon size={92} radius="lg" variant="light" color={iconMapped.color}>
          {icon || iconMapped.icon}
        </ThemeIcon>
      </Box>
      {title && (
        <Title align="center" mt="md" order={2}>
          {title}
        </Title>
      )}
      {subtitle && (
        <Text ta="center" mb={30} mt={20} fz="lg">
          {subtitle}
        </Text>
      )}
      <Flex align="center" justify="center">
        {actions?.map((action) => action)}
      </Flex>
    </Box>
  )
}
