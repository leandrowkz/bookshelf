import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  link: {
    '&, &:visited, &:hover': {
      color: theme.colors.violet[9],
      textDecoration: 'none',
    },
  },
}))
