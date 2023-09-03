import { Inter } from 'next/font/google'
import { rem, type MantineThemeOverride } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const inter = Inter({ subsets: ['latin'] })

export function useTheme() {
  const breakpoints = {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  }

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

  const matches = useMediaQuery(`(max-width: ${breakpoints.md})`)

  console.log(matches)

  const theme: MantineThemeOverride = {
    primaryColor: 'violet',
    fontFamily: inter.style.fontFamily,
    fontSizes,
    spacing,
    breakpoints,
    lineHeight: 1.5,
    defaultRadius: 'md',
    components: {
      Button: {
        defaultProps: { size: 'md' },
      },
      ActionIcon: {
        defaultProps: { size: 'md' },
      },
      Input: {
        defaultProps: { size: 'md' },
      },
      TextInput: {
        defaultProps: { size: 'md' },
      },
      PasswordInput: {
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
        container: matches ? rem(20) : rem(100),
      },
    },
  }

  return { theme }
}
