import { createStyles } from '@mantine/core'

export const useStyles = createStyles(({ other, spacing }) => ({
  carousel: {
    '& .mantine-Carousel-viewport': {
      paddingLeft: other.spacing.container,
    },
    '& .mantine-Carousel-controls': {
      paddingLeft: `calc(${spacing.lg} * 1.8)`,
    },
  },
  cover: {
    aspectRatio: '1.5/1',
  },
  wrapper: {
    marginLeft: `calc(${other.spacing.container} * -1)`,
    width: `calc(100% + calc(${other.spacing.container} * 2))`,
  },
}))
