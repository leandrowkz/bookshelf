import { Layout } from '@/components'
import { useGetBookDetailsQuery, useGetUserBookInfoQuery } from '@/store/books'
import { Flex } from '@mantine/core'
import { useRouter } from 'next/router'
import { BookCover } from '@/components/BookCover/BookCover'
import { BookDetailsCollectionInfoSection } from './BookDetailsCollectionInfoSection'
import { BookDetailsInfoSection } from './BookDetailsInfoSection'
import { BookDetailsRecommendationsSection } from './BookDetailsRecommendationsSection'

export function BookDetailsPage() {
  const router = useRouter()

  const bookId = String(router.query.id)
  const {
    data: book,
    isLoading: isLoadingBookDetails,
    isError: isErrorBookDetails,
  } = useGetBookDetailsQuery(bookId)

  const { data: bookUserInfo, isLoading: isLoadingBookUserInfo } = useGetUserBookInfoQuery(bookId)

  if (isLoadingBookDetails) {
    return 'Loading books...'
  } else if (isErrorBookDetails || !book) {
    return 'An error occurred'
  }

  return (
    <Layout>
      <Flex gap="xl">
        <Flex direction="column" gap="theme.spacing.lg" w="40%">
          <BookCover book={book} radius="lg" />
          <BookDetailsCollectionInfoSection
            bookCollectionInfo={bookUserInfo}
            isLoading={isLoadingBookUserInfo}
          />
        </Flex>
        <BookDetailsInfoSection book={book} />
      </Flex>
      <BookDetailsRecommendationsSection book={book} />
    </Layout>
  )
}
