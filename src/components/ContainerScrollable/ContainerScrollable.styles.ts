import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ other }) => ({
  container: {
    boxSizing: 'border-box',
    marginLeft: `calc(${other.spacing.container} * -1)`,
    width: `calc(100vw + ${other.spacing.container})`,
    paddingLeft: other.spacing.container,
    overflow: 'auto',
  },
}))
