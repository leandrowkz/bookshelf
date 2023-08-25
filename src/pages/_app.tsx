import { useState } from 'react'
import { Provider } from 'react-redux'
import NextApp, { type AppProps, type AppContext } from 'next/app'
import Head from 'next/head'
import { getCookie, setCookie } from 'cookies-next'
import { MantineProvider, type ColorScheme, ColorSchemeProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useTheme } from '@/hooks/useTheme'
import { wrapper } from '@/store'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component } = props
  const { theme } = useTheme()
  const { store, props: storeProps } = wrapper.useWrappedStore(props)
  const { pageProps } = storeProps
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

      <Provider store={store}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme, ...theme }} withGlobalStyles withNormalizeCSS>
            <Component {...pageProps} />
            <Notifications />
          </MantineProvider>
        </ColorSchemeProvider>
      </Provider>
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
