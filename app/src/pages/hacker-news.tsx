import React, { FormEvent, ChangeEvent } from 'react'

import HackerNewsList from '../components/organisms/HackerNewsList'
import { useHackerNews } from '../hooks/useHackerNews'

type SearchFormProp = {
  searchTerm: string
  onSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const SearchForm: React.FC<SearchFormProp> = ({
  searchTerm,
  onSearchSubmit,
  onSearchInput,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form onSubmit={onSearchSubmit} className='inline-flex items-center gap-1'>
      <div>
        <label htmlFor='search'>
          <strong>Search: </strong>
        </label>
        <input ref={inputRef} id='search' type='text' onChange={onSearchInput} value={searchTerm} />
      </div>
      <button type='submit' disabled={!searchTerm} className='bg-blue-300 px-3 py-1 rounded-md'>
        FETCH
      </button>
    </form>
  )
}

type TemplateProps = {
  loading: boolean
  error: Error | undefined
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className='p-4'>
        <h1 className='text-4xl mb-4'>Hacker News</h1>
        <div>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='p-4'>
        <h1 className='text-4xl mb-4'>Hacker News</h1>
        <div>Something went wrong!</div>
      </div>
    )
  }

  return (
    <div className='p-4'>
      <h1 className='text-4xl mb-4'>Hacker News</h1>
      {children}
    </div>
  )
}

export default function HackerNews() {
  const [query, setQuery] = React.useState<string>('React')
  const [searchTerm, setSearchTerm] = React.useState<string>('React')
  const { loading, data, error } = useHackerNews(query)

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target?.value)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    setQuery(searchTerm)
    event.preventDefault()
  }

  return (
    <Template loading={loading} error={error}>
      <SearchForm
        searchTerm={searchTerm}
        onSearchSubmit={handleSearchSubmit}
        onSearchInput={handleSearchInput}
      />
      <HackerNewsList stories={data} />
    </Template>
  )
}
