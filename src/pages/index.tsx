import { useState, type ReactNode } from 'react'
import { Layout } from '@/components'
import { useSearchBooksQuery } from '@/store/books'
import { TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { BookList } from '@/components/BookList/BookList'

export default function Page() {
  const [search, setSearch] = useState('barbie')
  let content: ReactNode
  const { data: books, isLoading, isError, isSuccess } = useSearchBooksQuery({ search })

  if (isLoading) {
    content = 'Loading books...'
  } else if (isError) {
    content = 'An error occurred'
  } else if (isSuccess) {
    content = <BookList books={books} />
  }

  return (
    <Layout>
      <TextInput
        icon={<IconSearch />}
        value={search}
        size="xl"
        placeholder="Search for through millions of books"
        mb="lg"
        onChange={(e) => setSearch(e.target.value)}
      />
      {content}
    </Layout>
  )
}
