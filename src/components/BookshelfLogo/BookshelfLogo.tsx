import { Anchor, Flex, Text } from '@mantine/core'
import { useStyles } from './BookshelfLogo.styles'
import { IconBooks } from '@tabler/icons-react'

export function BookshelfLogo() {
  const { classes, theme } = useStyles()

  return (
    <Anchor href="/" className={classes.link} data-testid="logo">
      <Text weight={700} size="xl">
        <Flex align="center" gap="sm">
          <IconBooks color={theme.colors.violet[8]} />
          Bookshelf
        </Flex>
      </Text>
    </Anchor>
  )
}
