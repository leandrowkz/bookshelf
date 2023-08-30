import { useAPIClient } from '@/hooks/useAPIClient'

export const useOpenLibraryAPI = () => useAPIClient('https://openlibrary.org')
