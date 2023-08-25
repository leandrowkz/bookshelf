import { Anchor, Flex, Text } from '@mantine/core'
import { useStyles } from './BookshelfLogo.styles'
import { IconBooks } from '@tabler/icons-react'

export function BookshelfLogo() {
  const { classes } = useStyles()

  return (
    <Anchor href="/" className={classes.link} data-testid="logo">
      <Text weight={700} size="xl">
        <Flex align="center" gap="sm">
          <IconBooks />
          Bookshelf
        </Flex>
      </Text>
    </Anchor>
  )
}
