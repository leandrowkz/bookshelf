import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '30% 1fr',
    gridTemplateRows: 'repeat(6, auto)',
    gridTemplateAreas: `
      "cover title"
      "cover authors"
      "cover metadata"
      "cover description"
      "cover listInfo"
      "actions listInfo"
    `,
    columnGap: theme.spacing.xl,
    alignContent: 'start',
    alignItems: 'start',
    justifyContent: 'start',
    placeContent: 'start',
    placeItems: 'start',
  },
  cover: {
    gridArea: 'cover',
  },
  actions: {
    gridArea: 'actions',
    marginTop: theme.spacing.lg,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'stretch',
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  title: {
    gridArea: 'title',
  },
  authors: {
    gridArea: 'authors',
    marginTop: theme.spacing.sm,
  },
  metadata: {
    gridArea: 'metadata',
    marginTop: theme.spacing.lg,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  description: {
    gridArea: 'description',
    marginTop: theme.spacing.lg,
  },
  listInfo: {
    gridArea: 'listInfo',
  },
}))
