import { Text, Box, type BoxProps } from '@mantine/core'
import type { ReactNode } from 'react'
import classes from './DataList.module.css'
import clsx from 'clsx'

export type DataListProps = BoxProps & {
  list: {
    label: string
    value: ReactNode | ReactNode[]
    icon?: ReactNode
  }[]
}

export function DataList({ list, ...props }: DataListProps) {
  const listItems: ReactNode[] = []

  list.forEach((item) => {
    const label = item.label
    const value = Array.isArray(item.value) ? item.value.join(', ') : item.value

    listItems.push(
      <Box className={classes.item}>
        {item.icon || undefined}
        <Text fw="bold" className={classes.itemLabel}>
          {label}
        </Text>
        <Text className={classes.itemValue}>{value}</Text>
      </Box>
    )
  })

  return (
    <Box {...props} className={clsx(classes.list, props.className)}>
      {listItems}
    </Box>
  )
}
