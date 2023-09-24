import type { PropsWithChildren } from 'react'
import { Box, type BoxProps } from '@mantine/core'
import classes from './ContainerScrollable.module.css'
import clsx from 'clsx'

export type ContainerScrollableProps = BoxProps & PropsWithChildren

export function ContainerScrollable({ children, ...props }: ContainerScrollableProps) {
  return (
    <Box {...props} className={clsx(classes.container, props.className)}>
      {children}
    </Box>
  )
}
