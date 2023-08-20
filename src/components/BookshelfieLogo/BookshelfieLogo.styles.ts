import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  link: {
    '&, &:visited': {
      color: theme.colors.violet[9],
      textDecoration: 'none',
    }
  }
}));
