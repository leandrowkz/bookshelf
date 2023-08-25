/**
 * Payload type for search on google books API.
 *
 * @see https://developers.google.com/books/docs/v1/reference/volumes/list#parameters
 */
export type GoogleBooksSearchPayload = {
  q: string
  filter?: 'ebooks' | 'free-ebooks' | 'full' | 'paid-ebooks' | 'partial'
  download?: 'epub'
  langRestrict?: boolean
  maxResults?: number
  showPreorders?: boolean
  orderBy?: 'newest' | 'relevance'
  startIndex?: number
}

/**
 * A Volume represents information that Google Books hosts about a book or a magazine. It contains
 * metadata, such as title and author, as well as personalized data, such as whether or not it has
 * been purchased. (Volume fields that are available in LITE projection are noted below).
 *
 * @see https://developers.google.com/books/docs/v1/reference/volumes
 */
export type Volume = {
  kind: 'books#volume'
  id: string
  etag: string
  selfLink: string
  saleInfo: SaleInfo
  userInfo: UserInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
  volumeInfo: VolumeInfo
}

type VolumeInfo = {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: { type: string; identifier: string }[]
  pageCount: number
  dimensions: {
    height: string
    width: string
    thickness: string
  }
  printType: string
  mainCategory: string
  categories: string[]
  averageRating: number
  ratingsCount: number
  contentVersion: string
  imageLinks?: {
    smallThumbnail: string
    thumbnail: string
    small: string
    medium: string
    large: string
    extraLarge: string
  }
  language: LanguageCode
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

type UserInfo = {
  isPurchased: boolean
  isPreordered: boolean
  updated: string
}

type SaleInfo = {
  country: string
  saleability: string
  onSaleDate: string
  isEbook: boolean
  listPrice: {
    amount: number
    currencyCode: string
  }
  retailPrice: {
    amount: number
    currencyCode: string
  }
  buyLink: string
}

type AccessInfo = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
    downloadLink: string
    acsTokenLink: string
  }
  pdf: {
    isAvailable: boolean
    downloadLink: string
    acsTokenLink: string
  }
  webReaderLink: string
  accessViewStatus: string
  downloadAccess: {
    kind: 'books#downloadAccessRestriction'
    volumeId: string
    restricted: boolean
    deviceAllowed: boolean
    justAcquired: boolean
    maxDownloadDevices: number
    downloadsAcquired: number
    nonce: string
    source: string
    reasonCode: string
    message: string
    signature: string
  }
}

type SearchInfo = {
  textSnippet: string
}

export type VolumesResponse = {
  kind: 'books#volumes'
  items: Volume[]
  totalItems: number
}
