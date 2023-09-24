import { Layout } from '@/components'
import { useGetBookDetailsQuery, useGetUserBookInfoQuery } from '@/store/books'
import { Flex, LoadingOverlay, Title } from '@mantine/core'
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
    return <LoadingOverlay visible overlayProps={{ blur: 2 }} />
  } else if (isErrorBookDetails || !book) {
    return <Title>An error occurred</Title>
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
