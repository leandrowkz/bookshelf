import { useAPIClient } from '@/hooks/useAPIClient'

export const useGoogleBooksAPI = () => useAPIClient('https://www.googleapis.com/books/v1')
