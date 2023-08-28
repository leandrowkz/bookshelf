import { Title, Text, Button, TextInput, Box } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useStyles } from './HomeHero.styles'

export function HomeHero() {
  const { classes } = useStyles()
  const [search, setSearch] = useState('')

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Box className={classes.content}>
          <Title className={classes.title}>
            Your personal{' '}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: 'pink', to: 'violet' }}
            >
              reading tracker
            </Text>{' '}
            companion
          </Title>

          <Text className={classes.description} my="lg" size="lg">
            Search through millions of books, save them in your lists, control your reading
            progress, and challenge yourself with reading challenges.{' '}
            <Text weight="bold" span>
              All that for free.
            </Text>
          </Text>

          <TextInput
            icon={<IconSearch />}
            value={search}
            size="xl"
            placeholder="Book title, author..."
            mt="lg"
            onChange={(e) => setSearch(e.target.value)}
            rightSection={
              <Button variant="gradient" gradient={{ from: 'grape', to: 'violet' }} mr="xl">
                Search
              </Button>
            }
          />
        </Box>
      </div>
    </div>
  )
}
