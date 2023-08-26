import { useRender } from '@/test-utils'
import { Footer } from './Footer'
import { useMenuLinks } from '@/hooks/useMenuLinks'

const { screen, render } = useRender()

function getFooterContent() {
  const logo = screen.getByTestId('logo')

  const socialIcons = {
    github: screen.getByTestId('icon-github'),
    linkedin: screen.getByTestId('icon-linkedin'),
    twitter: screen.getByTestId('icon-twitter'),
  }

  const description = screen.getByText('Your personal book catalog. With love, for free.')
  const trademark = screen.getByText(/Bookshelf. Made with 💜 by/i)
  const githubProfile = screen.getByText('@leandrowkz')

  return { logo, socialIcons, description, trademark, githubProfile }
}

function getMenuItems() {
  const menus: HTMLElement[] = []

  const { footer } = useMenuLinks()

  footer.forEach((group) => {
    group.links.map((item) => {
      menus.push(screen.getByRole('link', { name: item.label }))
    })
  })

  return menus
}

test('should render main content properly', () => {
  render(<Footer />)

  const { logo, trademark, description, githubProfile, socialIcons } = getFooterContent()

  expect(logo).toBeVisible()
  expect(description).toBeVisible()
  expect(trademark).toBeVisible()
  expect(githubProfile).toBeVisible()
  expect(githubProfile.getAttribute('href')).toEqual('https://github.com/leandrowkz')
  expect(socialIcons.github).toBeVisible()
  expect(socialIcons.github.getAttribute('href')).toEqual('https://github.com/leandrowkz')
  expect(socialIcons.linkedin).toBeVisible()
  expect(socialIcons.linkedin.getAttribute('href')).toEqual('https://linkedin.com/in/leandrowkz')
  expect(socialIcons.twitter).toBeVisible()
  expect(socialIcons.twitter.getAttribute('href')).toEqual('https://twitter.com/leandrowkzz')
})

test('should render menu section properly', () => {
  render(<Footer />)

  const menus = getMenuItems()

  menus.forEach((menu) => {
    expect(menu).toBeVisible()
  })
})
