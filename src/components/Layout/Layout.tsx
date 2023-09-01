import { type PropsWithChildren } from 'react'
import { Box } from '@mantine/core'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { useStyles } from './Layout.styles'

export type LayoutProps = PropsWithChildren

export function Layout({ children }: LayoutProps) {
  const { classes } = useStyles()

  return (
    <Box className={classes.page}>
      <Header />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </Box>
  )
}
