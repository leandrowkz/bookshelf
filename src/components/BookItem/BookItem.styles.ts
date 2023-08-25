import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  cover: {
    aspectRatio: '1/1.5',
    borderRadius: theme.radius.md,
    overflow: 'hidden',

    '& .mantine-Image-figure, & .mantine-Image-imageWrapper': {
      height: '100%',
    },
  },
}))
