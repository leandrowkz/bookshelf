import { useEffect, type PropsWithChildren } from 'react'
import { Box } from '@mantine/core'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { useStyles } from './Layout.styles'
import { NextResponse } from 'next/server'
import { useAuthUser } from '@/hooks/useAuthUser'
import { useRouter } from 'next/router'

export type LayoutProps = PropsWithChildren

export function Layout({ children }: LayoutProps) {
  const { classes } = useStyles()

  // const user = useAuthUser()
  // const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/')
  //   }
  // }, [])

  return (
    <Box className={classes.page}>
      <Header />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </Box>
  )
}
