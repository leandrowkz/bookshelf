import { Layout } from '@/components'
import { useGetBookDetailsQuery } from '@/store/books'
import { Box, Button, Spoiler, Text, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import { BookCover } from '@/components/BookCover/BookCover'
import { useStyles } from './[id].styles'
import { useHelpers } from '@/hooks/useHelpers'
import { IconHeart, IconPlayerPlay, IconPlus, IconProgressBolt } from '@tabler/icons-react'
import { DataList } from '@/components/DataList/DataList'
import { BookCarousel } from '@/components/BookCarousel/BookCarousel'
import { useMockData } from '../../../test-utils/hooks/useMockData'

export default function Page() {
  const router = useRouter()
  const { classes } = useStyles()
  const { getInlineAuthors, getYearFromDateString } = useHelpers()
  const { books } = useMockData()

  const { data: book, isLoading, isError } = useGetBookDetailsQuery(String(router.query.id))

  if (isLoading) {
    return 'Loading books...'
  } else if (isError || !book) {
    return 'An error occurred'
  }

  const list = [
    {
      label: 'ISBN',
      value: book.isbn,
    },
    {
      label: 'Publisher',
      value: book.publisher,
    },
    {
      label: 'Published at',
      value: book.publishedAt,
    },
    {
      label: 'Pages',
      value: String(book.pageCount),
    },
    {
      label: 'Title',
      value: book.title,
    },
    {
      label: 'Authors',
      value: book.authors.map((author) => author.name),
    },
    {
      label: 'Categories',
      value: book.categories || [],
    },
  ]

  return (
    <Layout>
      <Box className={classes.wrapper}>
        <BookCover book={book} className={classes.cover} radius="lg" />
        <Box className={classes.actions}>
          <Button size="lg" leftIcon={<IconPlus />} fullWidth>
            Add to your lists
          </Button>
          <Button size="lg" variant="default" leftIcon={<IconPlayerPlay />} fullWidth>
            Start reading
          </Button>
          <Button size="lg" variant="default" leftIcon={<IconProgressBolt />} fullWidth>
            Update progress
          </Button>
          <Button size="lg" variant="default" leftIcon={<IconHeart />} fullWidth>
            Favorite
          </Button>
        </Box>
        <Title className={classes.title} order={1}>
          {book.title}
        </Title>
        <Box className={classes.authors}>
          <Title c="dimmed" order={3}>
            {getInlineAuthors(book.authors)}
          </Title>
        </Box>
        <Box className={classes.metadata}>
          <Text c="dimmed">{book.categories.join(', ')}</Text>
          <Text c="dimmed" size="sm">
            •
          </Text>
          <Text c="dimmed">{book.pageCount} pages</Text>
          <Text c="dimmed" size="sm">
            •
          </Text>
          <Text c="dimmed">{getYearFromDateString(book.publishedAt || '')}</Text>
        </Box>
        <Spoiler
          maxHeight={285}
          showLabel="Show more"
          hideLabel="Hide"
          className={classes.description}
        >
          <Text dangerouslySetInnerHTML={{ __html: book.description || '' }} size="lg" />
        </Spoiler>
        <DataList list={list} mt="lg" className={classes.listInfo} />
      </Box>
      <Box mt="xl">
        {book.authors.map((author) => (
          <>
            <Title order={2}>
              More from{' '}
              <Text weight="bold" span c="dimmed">
                {author.name}
              </Text>
            </Title>
            <BookCarousel books={books} mt="lg" />
          </>
        ))}
      </Box>
    </Layout>
  )
}
