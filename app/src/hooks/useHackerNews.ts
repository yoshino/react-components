import { useEffect, useState } from 'react'

import { type Story, fetchHackerNews } from '../api/fetch-hacker-news'

export function useHackerNews(query: string) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Story[]>([])
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    fetchHackerNews(query)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [query])

  return { loading, data, error }
}
