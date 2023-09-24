import { Anchor, Flex, Text } from '@mantine/core'
import styles from './BookshelfLogo.module.css'
import { IconBooks } from '@tabler/icons-react'

export function BookshelfLogo() {
  return (
    <Anchor href="/" className={styles.logo} data-testid="logo">
      <Text fw={700} size="xl">
        <Flex align="center" gap="xs">
          <IconBooks className={styles.icon} />
          Bookshelf
        </Flex>
      </Text>
    </Anchor>
  )
}
