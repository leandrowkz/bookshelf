import { useAPIClient } from './useAPIClient'

global.Headers = jest.fn().mockResolvedValue({
  append: jest.fn(),
})
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => ({}),
})

function getQueryParams() {
  return { qs1: '1', qs2: '2', qs3: 3 }
}

function getBodyParams() {
  return { bd1: '1', bd2: '2', bd3: 3, bd4: { foo: 'bar' } }
}

test('should return props properly', () => {
  const { GET, POST, PUT, DELETE } = useAPIClient('')

  expect(GET).not.toBeUndefined()
  expect(POST).not.toBeUndefined()
  expect(PUT).not.toBeUndefined()
  expect(DELETE).not.toBeUndefined()
})

test('GET should work properly', () => {
  const api = useAPIClient('https://TESTING.COM')

  api.GET('/get-path', getQueryParams())

  expect(global.fetch).toHaveBeenCalledWith('https://TESTING.COM/get-path?qs1=1&qs2=2&qs3=3', {
    body: null,
    headers: new Headers(),
    method: 'GET',
  })
})

test('POST should work properly', () => {
  const api = useAPIClient('https://TESTING.COM')

  api.POST('/post-path', getBodyParams(), getQueryParams())

  expect(global.fetch).toHaveBeenCalledWith('https://TESTING.COM/post-path?qs1=1&qs2=2&qs3=3', {
    body: '{"bd1":"1","bd2":"2","bd3":3,"bd4":{"foo":"bar"}}',
    headers: new Headers(),
    method: 'POST',
  })
})

test('PUT should work properly', () => {
  const api = useAPIClient('https://TESTING.COM')

  api.PUT('/put-path', getBodyParams(), getQueryParams())

  expect(global.fetch).toHaveBeenCalledWith('https://TESTING.COM/put-path?qs1=1&qs2=2&qs3=3', {
    body: '{"bd1":"1","bd2":"2","bd3":3,"bd4":{"foo":"bar"}}',
    headers: new Headers(),
    method: 'PUT',
  })
})

test('DELETE should work properly', () => {
  const api = useAPIClient('https://TESTING.COM')

  api.DELETE('/del-path', getQueryParams())

  expect(global.fetch).toHaveBeenCalledWith('https://TESTING.COM/del-path?qs1=1&qs2=2&qs3=3', {
    body: null,
    headers: new Headers(),
    method: 'DELETE',
  })
})
