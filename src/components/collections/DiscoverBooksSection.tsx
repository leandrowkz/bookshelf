import { Box, Button, Flex, Text, Title } from '@mantine/core'
import { BookList } from '@/components/BookList/BookList'
import { books } from '@/test-utils/mocks/books'
import { ContainerScrollable } from '@/components/ContainerScrollable/ContainerScrollable'

export function DiscoverBooksSection() {
  const categories = [
    {
      icon: '🎭',
      label: 'Classics',
    },
    {
      icon: '🫀',
      label: 'Romance',
    },
    {
      icon: '😱',
      label: 'Thriller',
    },
    {
      icon: '🚀',
      label: 'Fiction',
    },
    {
      icon: '🧙‍♂️',
      label: 'Fantasy',
    },
    {
      icon: '🌈',
      label: 'LGBTQI+',
    },
    {
      icon: '🧘',
      label: 'Meditation',
    },
    {
      icon: '🔬',
      label: 'Science',
    },
    {
      icon: '🔬',
      label: 'Science',
    },
    {
      icon: '🔬',
      label: 'Science',
    },
    {
      icon: '🔬',
      label: 'Science',
    },
    {
      icon: '🔬',
      label: 'Science',
    },
  ]

  return (
    <Box mt="xl" data-testid="discover-books-section">
      <Title order={2}>Discover new books</Title>
      <ContainerScrollable mt="md">
        <Flex gap="md" wrap="nowrap">
          {categories.map((category, i) => (
            <Flex key={`category-action-${category.label}-${i}`} direction="column" gap="sm">
              <Button variant={i === 0 ? 'outline' : 'light'} h={100} w={100} radius="lg">
                <Text size="sm">{category.icon}</Text>
              </Button>
              <Text ta="center" c="dimmed">
                {category.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </ContainerScrollable>
      <Box mt="lg">
        <BookList books={books} />
      </Box>
    </Box>
  )
}
