import { Layout } from '@/components'
import { useGetBookDetailsQuery, useGetUserBookInfoQuery } from '@/store/books'
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Menu,
  Progress,
  Spoiler,
  Text,
  Title,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { BookCover } from '@/components/BookCover/BookCover'
import { useHelpers } from '@/hooks/useHelpers'
import {
  IconBookOff,
  IconBooks,
  IconChecks,
  IconHeart,
  IconPlayerPlay,
  IconPlus,
} from '@tabler/icons-react'
import { DataList } from '@/components/DataList/DataList'
import { BookCarousel } from '@/components/BookCarousel/BookCarousel'
import { useMockData } from '../../../test-utils/hooks/useMockData'
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

  const {
    data: bookUserInfo,
    isLoading: isLoadingBookUserInfo,
    isError: isErrorBookUserInfo,
  } = useGetUserBookInfoQuery(bookId)

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
