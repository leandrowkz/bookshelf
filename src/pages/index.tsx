import { Page } from '@/components'
import { useMockData } from '../../test-utils/hooks/useMockData'
import { BookCarousel } from '@/components/BookCarousel/BookCarousel'

export default function HomePage() {
  const { books } = useMockData()

  return (
    <Page>
      <h1>Home</h1>
      <BookCarousel books={books} />
    </Page>
  )
}
