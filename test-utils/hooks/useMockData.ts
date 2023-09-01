import { authors } from '../mocks/authors'
import { books } from '../mocks/books'
import { user, supabaseUser } from '../mocks/user'

export const useMockData = () => ({
  authors,
  books,
  user,
  supabaseUser,
})
