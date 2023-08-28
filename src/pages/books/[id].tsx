import { Layout } from '@/components'
import { useGetBookDetailsQuery } from '@/store/books'
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
import { useStyles } from './[id].styles'
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
      <Flex className={classes.wrapper}>
        <Flex className={classes.coverSection}>
          <BookCover book={book} radius="lg" />
          <Flex className={classes.actions}>
            <Menu shadow="md" width="target">
              <Menu.Target>
                {/* <Group>
                  <Avatar size={40} color="blue">
                    BH
                  </Avatar>
                  <div>
                    <Text>Bob Handsome</Text>
                    <Text size="xs" color="dimmed">bob@handsome.inc</Text>
                  </div>
                </Group> */}
                <Button
                  h={70}
                  size="lg"
                  variant="default"
                  className={classes.actionButton}
                  leftIcon={
                    <Avatar color="violet">
                      <IconPlus />
                    </Avatar>
                  }
                >
                  Add to my collection
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>
                  <Text size="sm">My collection</Text>
                </Menu.Label>
                <Menu.Item icon={<IconBooks />}>Want to read</Menu.Item>
                <Menu.Item icon={<IconPlayerPlay color="blue" />}>Currently reading</Menu.Item>
                <Menu.Item icon={<IconChecks color="green" />}>Completed readings</Menu.Item>
                <Menu.Item icon={<IconBookOff color="orange" />}>Dropped readings</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
          <Box mt="lg">
            <Group position="apart" mb="xs">
              <Text weight={500}>In your reading list</Text>
              <Badge color="dark" variant="light">
                <IconBooks display="block" size="1.5em" />
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Ready to start this book? Just start measuring your progress through the button down
              below.
            </Text>

            <Button variant="light" fullWidth mt="md" radius="md">
              Start reading
            </Button>
          </Box>
          <Box mt="lg">
            <Group position="apart" mb="xs">
              <Text weight={500}>Reading progress</Text>
              <Badge color="blue" variant="light">
                89%
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              You started reading this book 12 days ago. Your average pace is 20 pages per day.
            </Text>

            <Progress value={89} color="blue" mt="sm" />

            <Button variant="light" fullWidth mt="md" radius="md">
              Update progress now
            </Button>
          </Box>

          <Box mt="lg">
            <Group position="apart" mb="xs">
              <Text weight={500}>You completed this book</Text>
              <Badge color="green" variant="light">
                <IconChecks display="block" size="1.5em" />
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Congratulations! You have finish reading this book on August 12, 2023. What about to
              write a review for this book?
            </Text>

            <Button variant="light" fullWidth mt="md" radius="md">
              Write a review
            </Button>

            <Button variant="default" fullWidth mt="md" radius="md" leftIcon={<IconHeart />}>
              Add to favorites
            </Button>
          </Box>

          <Box mt="lg">
            <Group position="apart" mb="xs">
              <Text weight={500}>You have quit this book</Text>
              <Badge color="orange" variant="light">
                <IconBookOff display="block" size="1.5em" />
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Sometimes that happen, after all, not all the books are good. You dropped this reading
              on August 12, 2023. If you change your mind, just click on the button below to get
              back to this reading.
            </Text>

            <Button variant="light" fullWidth mt="md" radius="md">
              Start over reading
            </Button>
          </Box>
        </Flex>
        <Flex className={classes.bookInfoSection}>
          <Flex gap="md" w="100%" justify="space-between">
            <Title order={1}>{book.title}</Title>
            <ActionIcon variant="default" size="xl" mt="2px">
              <IconHeart />
            </ActionIcon>
          </Flex>
          <Title c="dimmed" order={3} className={classes.authors}>
            {getInlineAuthors(book.authors)}
          </Title>
          <Box className={classes.metadata}>
            {book.categories.length && (
              <>
                <Text c="dimmed">{book.categories.join(', ')}</Text>
                <Text c="dimmed" size="sm">
                  •
                </Text>
              </>
            )}
            <Text c="dimmed">{book.pageCount} pages</Text>
            <Text c="dimmed" size="sm">
              •
            </Text>
            <Text c="dimmed">{getYearFromDateString(book.publishedAt || '')}</Text>
          </Box>
          <Spoiler
            maxHeight={275}
            showLabel="Show more"
            hideLabel="Hide"
            className={classes.description}
          >
            <Text dangerouslySetInnerHTML={{ __html: book.description || '' }} size="lg" />
          </Spoiler>
          <DataList list={list} mt="lg" className={classes.listInfo} />
        </Flex>
      </Flex>
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
    </Layout>
  )
}
