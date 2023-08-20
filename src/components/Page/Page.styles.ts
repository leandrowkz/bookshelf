import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    minHeight: '100vh',
    maxWidth: '100vw',
  },
  content: {
    paddingBlock: theme.spacing.lg,
    paddingInline: theme.spacing.xl,
    paddingTop: `calc(${theme.spacing.lg} + ${rem(100)})`,
    maxWidth: '100%',
  },
}))
