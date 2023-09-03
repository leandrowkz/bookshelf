import { type Author } from '@/types/Author'

function getInlineAuthors(authors: Author[], separator = ', ') {
  return authors.map((author) => author.name).join(separator)
}

function getYearFromDateString(date: string) {
  const timestamp = Date.parse(date)

  if (isNaN(timestamp)) {
    return ''
  }

  return new Date(timestamp).getFullYear().toString()
}

export function useHelpers() {
  return {
    getInlineAuthors,
    getYearFromDateString,
  }
}
