import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  page: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    minHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  content: {
    paddingBlock: theme.spacing.lg,
    paddingInline: theme.other.spacing.container,
    paddingTop: `calc(${theme.spacing.lg} + ${theme.other.headerHeight})`,
    maxWidth: '100vw',
    boxSizing: 'border-box',
  },
}))
