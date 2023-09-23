import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  type FlexProps,
  Group,
  Menu,
  Progress,
  Text,
  LoadingOverlay,
} from '@mantine/core'
import {
  IconBookOff,
  IconBooks,
  IconChecks,
  IconHeart,
  IconPlayerPlay,
  IconPlus,
} from '@tabler/icons-react'
import { type UserBookInfo } from '@/types/UserBookInfo'

type BookCollectionInfoSectionProps = FlexProps & {
  bookCollectionInfo?: UserBookInfo
  isLoading?: boolean
}

export function BookDetailsCollectionInfoSection({
  bookCollectionInfo,
  isLoading,
  ...props
}: BookCollectionInfoSectionProps) {
  if (isLoading) {
    return <LoadingOverlay visible overlayBlur={2} />
  }

  if (!bookCollectionInfo) {
    return <></>
  }

  const collectionInfo = getDataBasedOnCollectionInfo(bookCollectionInfo)

  return (
    <Flex {...props} direction="column" gap="md">
      <Menu shadow="md" width="target">
        <Menu.Target>
          <Button
            h={70}
            size="lg"
            mt="lg"
            variant="default"
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

      <Box mt="lg">
        <Group position="apart" mb="xs">
          <Text weight={500}>{collectionInfo.title}</Text>
          <Badge color={collectionInfo.color} variant="light">
            {collectionInfo.icon}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {collectionInfo.description}
        </Text>

        {collectionInfo.collection === 'currently-reading' && (
          <Progress value={collectionInfo.progress} color="blue" mt="sm" />
        )}

        <Button
          variant="light"
          fullWidth
          mt="md"
          radius="md"
          onClick={collectionInfo.action.actionable}
        >
          {collectionInfo.action.label}
        </Button>

        {collectionInfo.collection === 'completed-readings' && (
          <Button variant="default" fullWidth mt="md" radius="md" leftIcon={<IconHeart />}>
            Add to favorites
          </Button>
        )}
      </Box>
    </Flex>
  )
}

function getDataBasedOnCollectionInfo(bookCollectionInfo: UserBookInfo) {
  const data = {
    collection: bookCollectionInfo.collectionKey,
    title: '',
    description: '',
    icon: <></>,
    color: '',
    progress: 0,
    action: {
      label: '',
      actionable: () => null,
    },
  }

  switch (bookCollectionInfo.collectionKey?.toLowerCase()) {
    case 'want-read':
      data.title = 'In your reading list'
      data.description = 'Ready to start this book? Just click on the button down below.'
      data.color = 'dark'
      data.icon = <IconBooks display="block" size="1.5em" />
      data.action = {
        label: 'Start reading',
        actionable: () => null,
        // actionable: () => useAddBookToCollectionMutation({ collectionId: 'currently-reading' }),
      }
      break

    case 'currently-reading':
      data.title = 'Currently reading'
      data.description =
        'You started reading this book 12 days ago. Your average pace is 20 pages per day.'
      data.color = 'blue'
      data.icon = <Text>{Number(bookCollectionInfo.progress)}%</Text>
      data.progress = Number(bookCollectionInfo.progress)
      data.action = {
        label: 'Update progress',
        actionable: () => null,
        // actionable: () => useAddBookToCollectionMutation({ collectionId: 'currently-reading' }),
      }
      break

    case 'completed-readings':
      data.title = 'You completed this book'
      data.description =
        'Congratulations! You have finish reading this book on August 12, 2023. What about to write a review for this book?'
      data.color = 'green'
      data.icon = <IconChecks display="block" size="1.5em" />
      data.action = {
        label: 'Write a review',
        // actionable: () => useAddBookToCollectionMutation({ collectionId: 'currently-reading' }),
        actionable: () => null,
      }
      break

    case 'dropped-readings':
      data.title = 'You have quit this book'
      data.description =
        'Sometimes that happen, after all, not all the books are good. You dropped this reading on August 12, 2023. If you change your mind, just click on the button below to get back to this reading.'
      data.color = 'orange'
      data.icon = <IconBookOff display="block" size="1.5em" />
      data.action = {
        label: 'Start over reading',
        actionable: () => null,
        // actionable: () => useAddBookToCollectionMutation({ collectionId: 'currently-reading' }),
      }
      break

    default:
      data.title = 'Not in your collection'
      data.description =
        'Start adding this book to your collection by adding it to your want to read list.'
      data.color = 'gray'
      data.icon = <IconBookOff display="block" size="1.5em" />
      data.action = {
        label: 'Add to want to read',
        actionable: () => null,
        // actionable: () => useAddBookToCollectionMutation({ collectionId: 'currently-reading' }),
      }
      break
  }

  return data
}
