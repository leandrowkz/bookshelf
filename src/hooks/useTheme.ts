import { Inter } from 'next/font/google'
import { MantineThemeOverride } from "@mantine/core";

const inter = Inter({ subsets: ['latin'] })

const theme: MantineThemeOverride = {
  primaryColor: 'violet',
  fontFamily: inter.style.fontFamily,
  fontSizes: {
    xs: '0.7em',
    sm: '0.8em',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.56rem',
  },
  spacing: {
    xs: '0.2rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '5rem',
  },
  lineHeight: 1.5,
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: { size: 'md' }
    },
    ActionIcon: {
      defaultProps: { size: 'md' }
    },
    Title: {
      styles: {
        root: {
          '&:is(h1)': {
            margin: 0,
            marginBlock: '0 !important',
          },
        }
      }
    }
  },
  globalStyles: (theme) => ({
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
    },
  }),
}

export const useTheme = () => ({ theme })
