const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

// https://hn.algolia.com/api
export type Story = {
  title: string
  author: string
  objectID: string
  num_comments: number
}

export async function fetchHackerNews(query: string): Promise<Story[]> {
  const url = `${API_ENDPOINT}${query}`
  const response = await fetch(url)
  const json_response = await response.json()
  if (response.ok) {
    return json_response.hits
  } else {
    throw new Error(`http status: ${response.status}`)
  }
}
