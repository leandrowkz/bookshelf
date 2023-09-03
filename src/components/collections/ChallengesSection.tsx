import {
  Badge,
  Group,
  Paper,
  Progress,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from '@mantine/core'
import { IconBook } from '@tabler/icons-react'

const ICON_SIZE = rem(60)

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    backgroundImage: theme.fn.gradient({ from: 'dark', to: 'violet', deg: 45 }),
    color: theme.white,
  },

  icon: {
    position: 'absolute',
    top: `calc(-${ICON_SIZE} / 3)`,
    left: `calc(50% - ${ICON_SIZE} / 2)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}))

export function ChallengesSection() {
  const { classes } = useStyles()

  return (
    <Paper radius="lg" className={classes.card}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <IconBook size="2rem" stroke={1.5} />
      </ThemeIcon>

      <Title order={3} ta="center" className={classes.title}>
        Reading challenge
      </Title>
      <Text c="dimmed" ta="center" mt="xs">
        2 books / month
      </Text>

      <Group position="apart" mt="md">
        <Text fz="sm" color="dimmed">
          Progress
        </Text>
        <Text fz="sm" color="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt="xs" mb="lg" color="green" />

      <Group position="apart" mt="md">
        <Text>20 / 36 books</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  )
}
