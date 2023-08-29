export type OpenLibraryListResponse<T> = {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: T[]
  q: string
  offset: Nullable<number>
}

export type SearchWork = {
  _version_: number
  key: string
  type: 'work'
  seed: string[]
  title: string
  title_suggest: string
  title_sort: string
  subtitle: string
  first_sentence: string[]
  edition_count: number
  edition_key: string[]
  publish_date: string[]
  publish_year: number[]
  publish_place: string[]
  place: string[]
  place_key: string[]
  place_facet: string[]
  first_publish_year: number
  number_of_pages_median: number
  isbn: string[]
  oclc: string[]
  ddc: string[]
  ddc_sort: string
  lcc: string[]
  lcc_sort: string
  lccn: string[]
  last_modified_i: number
  ebook_count_i: number
  ebook_access: string
  has_fulltext: false
  public_scan_b: false
  ratings_count_1: number
  ratings_count_2: number
  ratings_count_3: number
  ratings_count_4: number
  ratings_count_5: number
  ratings_average: number
  ratings_sortable: number
  ratings_count: number
  readinglog_count: number
  want_to_read_count: number
  currently_reading_count: number
  already_read_count: number
  cover_edition_key: string
  cover_i: number
  language: LanguageCode[]
  contributor: string[]
  publisher: string[]
  publisher_facet: string[]
  author_key: string[]
  author_name: string[]
  author_alternative_name: string[]
  author_facet: string[]
  person: string[]
  person_key: string[]
  person_facet: string[]
  subject: string[]
  subject_key: string[]
  subject_facet: string[]
  ia: string[]
  ia_box_id: string[]
  ia_collection: string[]
  ia_collection_s: string
  ia_loaded_id: string[]
  lending_edition_s: string
  lending_identifier_s: string
  printdisabled_s: string
  id_goodreads: string[]
  id_wikidata: string[]
  id_librarything: string[]
  id_amazon: string[]
  id_amazon_de_asin: string[]
  id_amazon_ca_asin: string[]
  id_amazon_co_uk_asin: string[]
  id_amazon_it_asin: string[]
  id_better_world_books: string[]
  id_british_library: string[]
  id_alibris_id: string[]
  id_canadian_national_library_archive: string[]
  id_bodleian__oxford_university: string[]
  id_depósito_legal: string[]
  id_google: string[]
  id_overdrive: string[]
  id_paperback_swap: string[]
  id_hathi_trust: string[]
  id_yakaboo: string[]
}

export type Work = {
  key: string
  type: { key: '/type/work' }
  title: string
  description: string
  covers: number[]
  subject_places: string[]
  subjects: string[]
  subject_people: string[]
  subject_times: string[]
  location: string
  latest_revision: number
  revision: number
  links: {
    url: string
    title: string
    type: {
      key: '/type/link'
    }
  }[]
  authors: {
    author: {
      key: string
    }
    type: {
      key: string
    }
  }[]
  excerpts: {
    comment: string
    excerpt: string
    author: {
      key: string
    }
  }[]
  created: {
    type: '/type/datetime'
    value: string
  }
  last_modified: {
    type: '/type/datetime'
    value: string
  }
}

type Book = {
  type: { key: '/type/edition' }
  key: string
  title: string
  first_sentence: string
  description: string
  number_of_pages: number
  publish_date: string
  covers: number[]
  contributions: string[]
  languages: { key: string }[]
  publishers: string[] | { name: string }[]
  source_records: string[]
  local_id: string[]
  ocaid: string
  isbn_10: string[]
  isbn_13: string[]
  classifications: string[]
  latest_revision: number
  revision: number
  authors: {
    url: string
    key: string
    name: string
  }[]
  identifiers: {
    isbn_13: string[]
    openlibrary: string[]
    goodreads: string[]
    librarything: string[]
  }
  works: {
    key: string
  }[]
  cover: {
    small: string
    medium: string
    large: string
  }
  created: {
    type: '/type/datetime'
    value: string
  }
  last_modified: {
    type: '/type/datetime'
    value: string
  }
}
