import { useState } from 'react'
import NextApp, { type AppProps, type AppContext } from 'next/app'
import Head from 'next/head'
import { getCookie, setCookie } from 'cookies-next'
import { MantineProvider, type ColorScheme, ColorSchemeProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useTheme } from '@/hooks/useTheme'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const { theme } = useTheme()
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme, ...theme }} withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  }
}
