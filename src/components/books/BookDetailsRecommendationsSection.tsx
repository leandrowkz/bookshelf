import { Box, Flex, Text, Title } from '@mantine/core'
import { BookCarousel } from '@/components/BookCarousel/BookCarousel'
import { useMockData } from '../../../test-utils/hooks/useMockData'
import type { Book } from '@/types/Book'

type BookDetailsRecommendationsSectionProps = {
  book?: Book
}

export function BookDetailsRecommendationsSection({
  book,
}: BookDetailsRecommendationsSectionProps) {
  if (!book) {
    return <></>
  }

  const { books } = useMockData()

  return (
    <Flex direction="column">
      {book.authors.map((author, i) => (
        <Box mt="xl" key={`more-from-author-${i}`}>
          <Title order={2}>
            More from{' '}
            <Text weight="bold" span c="dimmed">
              {author.name}
            </Text>
          </Title>
          <BookCarousel books={books} mt="lg" />
        </Box>
      ))}
      {book.categories.slice(0, 2).map((category, i) => (
        <Box mt="xl" key={`more-from-category-${i}`}>
          <Title order={2}>
            More on{' '}
            <Text weight="bold" span c="dimmed">
              {category}
            </Text>
          </Title>
          <BookCarousel books={books} mt="lg" />
        </Box>
      ))}
    </Flex>
  )
}
