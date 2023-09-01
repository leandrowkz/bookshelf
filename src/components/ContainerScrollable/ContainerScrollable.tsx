import { Box, type BoxProps } from '@mantine/core'
import { useStyles } from './ContainerScrollable.styles'

export type ContainerScrollableProps = BoxProps

export function ContainerScrollable({ children, ...props }: ContainerScrollableProps) {
  const { classes, cx } = useStyles()

  return (
    <Box {...props} className={cx(classes.container, props.className)}>
      {children}
    </Box>
  )
}
