export function useAPIClient(host: string, headers?: RequestHeaders) {
  const clientHeaders = new Headers({ 'Content-Type': 'application/json', ...headers })

  const request = async <T>({ path, method, body, params }: RequestPayload) => {
    const url = buildPath(path, params)
    const options: RequestInit = {
      method,
      headers: clientHeaders,
      body: body ? JSON.stringify(body) : null,
    }

    const response = await fetch(url, options)

    return toJSON<T>(response)
  }

  const GET = async <T>(path: string, params?: RequestQuery) => {
    const options: RequestPayload = {
      path,
      params,
      method: 'GET',
    }

    return request<T>(options)
  }

  const POST = async <T>(path: string, body?: RequestBody, params?: RequestQuery) => {
    const options: RequestPayload = {
      path,
      body,
      params,
      method: 'POST',
    }

    return request<T>(options)
  }

  const PUT = async <T>(path: string, body?: RequestBody, params?: RequestQuery) => {
    const options: RequestPayload = {
      path,
      body,
      params,
      method: 'PUT',
    }

    return request<T>(options)
  }

  const DELETE = async <T>(path: string, params?: RequestQuery) => {
    const options: RequestPayload = {
      path,
      params,
      method: 'DELETE',
    }

    return request<T>(options)
  }

  const toJSON = async <T>(response: Response) => {
    if (response.ok) {
      return response.json() as unknown as T
    }

    const error = await response.json()

    throw Error(error.message || error)
  }

  const buildPath = (path: string, queryString: RequestQuery = {}) => {
    const params = new URLSearchParams()

    for (const [key, value] of Object.entries(queryString)) {
      params.append(key, (value || '').toString())
    }

    return `${host}` + `/${path}`.replace('//', '/') + `?${params.toString()}`
  }

  return {
    GET,
    POST,
    PUT,
    DELETE,
  }
}
