import { useHelpers } from './useHelpers'
import { useMockData } from '@/test-utils/index'

test('getInlineAuthors: should work properly', () => {
  const { authors } = useMockData()
  const { getInlineAuthors } = useHelpers()

  const authors1 = getInlineAuthors(authors.slice(0, 3))
  const authors2 = getInlineAuthors([authors[0]])
  const authors3 = getInlineAuthors([])

  expect(authors1).toEqual('Erica Rand, Mary F Rogers, Sharon Korbeck')
  expect(authors2).toEqual('Erica Rand')
  expect(authors3).toEqual('')
})

test('getYearFromDateString: shoul work properly', () => {
  const { getYearFromDateString } = useHelpers()

  const year1 = getYearFromDateString('2020-01-02')
  const year2 = getYearFromDateString('2021-02-14T14:45:23Z')
  const year3 = getYearFromDateString('INVALID_DATE')
  const year4 = getYearFromDateString('1989')

  // @ts-expect-error Forced null
  const year5 = getYearFromDateString(null)

  // @ts-expect-error Unexpected diff type
  const year6 = getYearFromDateString(new Date('2014-12-21'))

  expect(year1).toEqual('2020')
  expect(year2).toEqual('2021')
  expect(year3).toEqual('')
  expect(year4).toEqual('1989')
  expect(year5).toEqual('')
  expect(year6).toEqual('2014')
})
