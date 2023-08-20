import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  carousel: {
    '& .mantine-Carousel-viewport': {
      paddingLeft: theme.spacing.xl
    },
    '& .mantine-Carousel-controls': {
      paddingLeft: `calc(${theme.spacing.lg} * 1.8)`
    }
  },
  cover: {
    aspectRatio: '1.5/1'
  },
  wrapper: {
    marginLeft: `calc(${theme.spacing.xl} * -1)`,
    width: `calc(100% + calc(${theme.spacing.xl} * 2))`
  }
}));
