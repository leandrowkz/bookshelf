import { type PropsWithChildren } from 'react'
import { Box } from '@mantine/core'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import classes from './Layout.module.css'

export type LayoutProps = PropsWithChildren

export function Layout({ children }: LayoutProps) {
  return (
    <Box className={classes.page}>
      <Header />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </Box>
  )
}
