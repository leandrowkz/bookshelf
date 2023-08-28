const headerLinks = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/favorites',
    label: 'Favorites',
  },
  {
    link: '/collection',
    label: 'My collection',
  },
]

const footerLinks = [
  {
    title: 'Bookshelf',
    links: [
      {
        label: 'Home',
        link: '/',
        target: '',
      },
      {
        label: 'My lists',
        link: '/lists',
        target: '',
      },
      {
        label: 'Sign in',
        link: '/sign-in',
        target: '',
      },
      {
        label: 'Sign up',
        link: '/sign-up',
        target: '',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Github',
        link: 'https://github.com/leandrowkz/bookshelf',
        target: '_blank',
      },
      {
        label: 'Sponsor',
        link: 'https://github.com/sponsors/leandrowkz',
        target: '_blank',
      },
    ],
  },
]

export const useMenuLinks = () => ({
  header: headerLinks,
  footer: footerLinks,
})
