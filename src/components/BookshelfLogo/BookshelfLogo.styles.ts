import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  link: {
    '&, &:visited, &:hover, &:active': {
      color: theme.colorScheme === 'light' ? theme.black : theme.white,
      textDecoration: 'none',
    },
  },
}))
