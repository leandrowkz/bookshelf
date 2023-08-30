import type { Author } from '@/types/Author'

export function getAuthorDetails(authorId: string): Author {
  return {
    id: authorId,
    name: authorId,
    bio: null,
    nationality: null,
    birthdate: null,
    picture: null,
  }
}
