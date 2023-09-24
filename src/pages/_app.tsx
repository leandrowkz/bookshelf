import { useState } from 'react'
import { Provider } from 'react-redux'
import NextApp, { type AppProps, type AppContext } from 'next/app'
import Head from 'next/head'
import { getCookie } from 'cookies-next'
import { Notifications } from '@mantine/notifications'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { wrapper } from '@/store'
import {
  AppThemeProvider,
  ColorSchemeScript,
} from '@/components/ui/AppThemeProvider/AppThemeProvider'

export default function App(props: AppProps) {
  const { Component } = props
  const { store, props: storeProps } = wrapper.useWrappedStore(props)
  const { pageProps } = storeProps
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <ColorSchemeScript />
      </Head>

      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Provider store={store}>
          <AppThemeProvider>
            <Component {...pageProps} />
            <Notifications />
          </AppThemeProvider>
        </Provider>
      </SessionContextProvider>
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
