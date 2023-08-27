import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => {
  const bookshelvesImgs = [
    'https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
    'https://images.unsplash.com/photo-1545696648-86c761bc5410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80',
    'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
    'https://images.unsplash.com/photo-1554357395-dbdc356ca5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
  ]

  const bgBookshelf = bookshelvesImgs[Math.floor(Math.random() * bookshelvesImgs.length)]

  return {
    root: {
      backgroundColor: '#11284b',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${bgBookshelf})`,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
      marginLeft: `calc(${theme.spacing.xl} * -1)`,
      marginTop: `calc(${theme.spacing.xl} * -1)`,
      marginBottom: theme.spacing.xl,
      width: `calc(100% + calc(${theme.spacing.xl} * 2))`,
    },

    inner: {
      display: 'flex',
      justifyContent: 'space-between',

      [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
      },
    },

    image: {
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },

    content: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,

      [theme.fn.smallerThan('md')]: {
        marginRight: 0,
      },
    },

    title: {
      color: theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,
      maxWidth: rem(500),
      fontSize: rem(48),

      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        fontSize: rem(34),
        lineHeight: 1.15,
      },
    },

    description: {
      color: theme.white,
      opacity: 0.75,
      maxWidth: rem(500),

      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
      },
    },

    control: {
      paddingLeft: rem(50),
      paddingRight: rem(50),
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(22),

      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },
    },
  }
})
