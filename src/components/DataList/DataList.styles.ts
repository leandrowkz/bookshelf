import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  list: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    paddingBlock: theme.spacing.md,
  },
  itemLabel: {
    flex: '0 0 150px',
  },
  itemValue: {
    flex: '1',
  },
}))
