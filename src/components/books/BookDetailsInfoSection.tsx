import { ActionIcon, Badge, Box, Flex, Spoiler, Text, Title } from '@mantine/core'
import { useHelpers } from '@/hooks/useHelpers'
import { IconHeart } from '@tabler/icons-react'
import { DataList } from '@/components/DataList/DataList'
import type { Book } from '@/types/Book'

type BookDetailsInfoSectionProps = {
  book?: Book
}

export function BookDetailsInfoSection({ book }: BookDetailsInfoSectionProps) {
  if (!book) {
    return <></>
  }

  const { getInlineAuthors, getYearFromDateString } = useHelpers()

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
    <Flex w="100%" direction="column">
      <Flex gap="md" w="100%" justify="space-between">
        <Title order={1}>
          <Flex align="center" justify="start" columnGap="sm" wrap="wrap">
            <Box>{book.title}</Box>
            {book.type === 'ebook' && (
              <Badge
                color="teal"
                size="lg"
                mt="4px"
                px="md"
                variant="gradient"
                gradient={{ from: 'orange', to: 'red' }}
              >
                Ebook
              </Badge>
            )}
          </Flex>
        </Title>
        <ActionIcon variant="default" size="xl" mt="2px">
          <IconHeart />
        </ActionIcon>
      </Flex>
      <Title c="dimmed" order={3} mt="xs">
        {getInlineAuthors(book.authors)}
      </Title>
      <Flex mt="lg" align="center" wrap="wrap" columnGap="sm">
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
      </Flex>
      <Spoiler mt="lg" maxHeight={275} showLabel="Show more" hideLabel="Hide">
        <Text dangerouslySetInnerHTML={{ __html: book.description || '' }} size="lg" />
      </Spoiler>
      <DataList list={list} mt="lg" />
    </Flex>
  )
}
