import { type ReactNode } from 'react'
import { Layout } from '@/components'
import { useSearchBooksQuery } from '@/store/books'
import { BookList } from '@/components/BookList/BookList'
import { HomeHero } from '@/components/HomeHero/HomeHero'

export default function Page() {
  let content: ReactNode
  const {
    data: books,
    isLoading,
    isError,
    isSuccess,
  } = useSearchBooksQuery({ title: 'scott fitzgerald' })

  if (isLoading) {
    content = 'Loading books...'
  } else if (isError) {
    content = 'An error occurred'
  } else if (isSuccess) {
    content = <BookList books={books} />
  }

  return (
    <Layout>
      <HomeHero />
      {content}
    </Layout>
  )
}
