import { Inter } from 'next/font/google'
import { rem, type MantineThemeOverride } from '@mantine/core'

const inter = Inter({ subsets: ['latin'] })

const fontSizes = {
  xs: '0.694em',
  sm: '0.833rem',
  md: '1rem',
  lg: '1.2rem',
  xl: '1.44rem',
}

const spacing = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '2.5rem',
  xl: '4rem',
}

const theme: MantineThemeOverride = {
  primaryColor: 'violet',
  fontFamily: inter.style.fontFamily,
  fontSizes,
  spacing,
  lineHeight: 1.5,
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: { size: 'md' },
    },
    ActionIcon: {
      defaultProps: { size: 'md' },
    },
    Title: {
      styles: {
        root: {
          '&:is(h1)': {
            margin: 0,
            marginBlock: '0 !important',
          },
        },
      },
    },
    'Menu.Item': {
      defaultProps: {
        fontSize: 'xl',
      },
    },
  },
  globalStyles: () => ({
    p: {
      marginTop: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
    },
    '.mantine-Menu-item': {
      fontSize: fontSizes.md,
    },
    '.mantine-Menu-label': {
      fontSize: fontSizes.sm,
    },
  }),
  other: {
    headerHeight: rem(90),
    spacing: {
      container: rem(100),
    },
  },
}

export const useTheme = () => ({ theme })
