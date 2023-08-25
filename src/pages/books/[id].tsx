import type { ReactNode } from 'react'
import { Layout } from '@/components'
import { useGetBookDetailsQuery } from '@/store/books'
import { Text } from '@mantine/core'
import { useRouter } from 'next/router'
import { BookItem } from '@/components/BookItem/BookItem'

export default function Page() {
  const router = useRouter()

  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
  } = useGetBookDetailsQuery(String(router.query.id))

  let content: ReactNode
  if (isLoading) {
    content = 'Loading books...'
  } else if (isError) {
    content = 'An error occurred'
  } else if (isSuccess) {
    content = <BookItem book={book} />
  }

  return (
    <Layout>
      <Text>{book?.title}</Text>
      {content}
    </Layout>
  )
}
