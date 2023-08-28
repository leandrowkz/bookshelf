import { type Author } from '@/types/Author'

function getInlineAuthors(authors: Author[], separator = ', ') {
  return authors.map((author) => author.name).join(separator)
}

function getYearFromDateString(date: string) {
  if (!date) {
    return
  }

  return new Date(date).getFullYear().toString()
}

export function useHelpers() {
  return {
    getInlineAuthors,
    getYearFromDateString,
  }
}
