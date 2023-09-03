import { BookList } from '@/components/BookList/BookList'
import { books } from '@/test-utils/mocks/books'
import { Badge, Box, Button, Group, Title } from '@mantine/core'

export function CollectionsSection() {
  return (
    <Box mt="lg">
      <Title order={2}>My collection</Title>
      <Group spacing={0} mt="md">
        <Button variant="light">
          Want to read{' '}
          <Badge size="sm" ml={5} variant="filled">
            18
          </Badge>
        </Button>
        <Button variant="subtle">
          Currently reading
          <Badge size="sm" ml={5}>
            1
          </Badge>
        </Button>
        <Button variant="subtle">
          Completed
          <Badge size="sm" ml={5}>
            14
          </Badge>
        </Button>
        <Button variant="subtle">
          Dropped
          <Badge size="sm" ml={5}>
            1
          </Badge>
        </Button>
      </Group>
      <Box mt="lg">
        <BookList books={books} />
      </Box>
    </Box>
  )
}
