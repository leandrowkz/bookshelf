import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',

    '&:before': {
      position: 'absolute',
      content: '"📖"',
      fontSize: `calc(${theme.fontSizes.xl} * 2)`,
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      height: '100%',
      background: theme.colors.gray[1],
    },
  },
  cover: {
    aspectRatio: '1/1.5',

    '& .mantine-Image-figure, & .mantine-Image-imageWrapper': {
      height: '100%',
    },
  },
}))
