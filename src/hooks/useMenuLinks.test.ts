import { useMenuLinks } from './useMenuLinks'

test('should have all menus', () => {
  const result = useMenuLinks()

  expect(JSON.stringify(result)).toMatchInlineSnapshot(
    `"{"header":[{"link":"/","label":"Home"},{"link":"/favorites","label":"Favorites"},{"link":"/collections","label":"My collection"}],"footer":[{"title":"Bookshelf","links":[{"label":"Home","link":"/","target":""},{"label":"Favorites","link":"/favorites","target":""},{"label":"My collection","link":"/collections","target":""},{"label":"Sign in","link":"/auth/sign-in","target":""},{"label":"Sign up","link":"/auth/sign-up","target":""}]},{"title":"Social","links":[{"label":"Github","link":"https://github.com/leandrowkz/bookshelf","target":"_blank"},{"label":"Sponsor","link":"https://github.com/sponsors/leandrowkz","target":"_blank"}]}]}"`
  )
})
