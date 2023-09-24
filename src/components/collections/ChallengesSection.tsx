import { Badge, Group, Paper, Progress, Text, ThemeIcon, Title, rem } from '@mantine/core'
import { IconBook } from '@tabler/icons-react'
import classes from './ChallengeSection.module.css'

const ICON_SIZE = rem(60)

export function ChallengesSection() {
  return (
    <Paper radius="lg" className={classes.card} data-testid="challenge-card">
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <IconBook size="2rem" stroke={1.5} />
      </ThemeIcon>

      <Title order={3} ta="center" className={classes.title}>
        Reading challenge
      </Title>
      <Text c="dimmed" ta="center" mt="xs">
        2 books / month
      </Text>

      <Group justify="space-between" mt="md">
        <Text fz="sm" color="dimmed">
          Progress
        </Text>
        <Text fz="sm" color="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt="xs" mb="lg" color="green" />

      <Group justify="space-between" mt="md">
        <Text>20 / 36 books</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  )
}
