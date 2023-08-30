import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
    justifyContent: 'space-between',
    columnGap: '2px',
  },
  ebookBadge: {
    fontSize: '0.4rem',
    textOverflow: 'none',
    overflow: 'none',
    marginTop: '4px',
    flexShrink: 0,
    paddingLeft: '5px',
    paddingRight: '5px',
    '& .mantine-Badge-inner': {
      overflow: 'visible',
      textOverflow: 'unset',
    },
  },
}))
