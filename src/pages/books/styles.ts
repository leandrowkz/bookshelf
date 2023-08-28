import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    gap: theme.spacing.xl,
  },
  coverSection: {
    flex: '0 1 30%',
    flexDirection: 'column',
    gap: theme.spacing.lg,
  },
  actions: {
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  bookInfoSection: {
    flex: '1',
    flexDirection: 'column',
  },
  authors: {
    marginTop: theme.spacing.xs,
  },
  metadata: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: theme.spacing.sm,
  },
  description: {
    marginTop: theme.spacing.lg,
  },
  listInfo: {
    marginTop: theme.spacing.lg,
  },
}))

export default {}
