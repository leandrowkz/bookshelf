import { type PropsWithChildren } from 'react'
import { Box } from '@mantine/core'
import { Header } from '@/components/Header/Header'
import { useStyles } from './Layout.styles'
import { Footer } from '../Footer/Footer'

export function Layout({ children }: PropsWithChildren) {
  const { classes } = useStyles()
  return (
    <Box className={classes.page}>
      <Header />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </Box>
  )
}
