import classnames from 'classnames'
import { sortBy } from 'lodash'
import { useState } from 'react'

type Props = {
  stories: Story[]
  className?: string
}

// https://hn.algolia.com/api
type Story = {
  title: string
  author: string
  objectID: string
  num_comments: number
}

type ListItemProps = {
  story: Story
}

const ListItem: React.FC<ListItemProps> = ({ story }) => {
  return (
    <li className='grid grid-cols-8 gap-1 px-4'>
      <span className='col-span-4'>{story.title}</span>
      <span className='col-span-3'>{story.author}</span>
      <span className='col-span-1'>{story.num_comments}</span>
    </li>
  )
}

type SortKey = 'NONE' | 'TITLE' | 'AUTHOR' | 'COMMENT'

type SortState = {
  sortKey: SortKey
  isReverse: boolean
}

const SORTS = {
  NONE: (list: Story[]) => list,
  TITLE: (list: Story[]) => sortBy(list, 'title'),
  AUTHOR: (list: Story[]) => sortBy(list, 'author'),
  COMMENT: (list: Story[]) => sortBy(list, 'num_comments'),
}

const HackerNewsList: React.FC<Props> = ({ stories, className }) => {
  const [sort, setSort] = useState<SortState>({
    sortKey: 'NONE',
    isReverse: false,
  })

  const handleSort = (sortKey: SortKey) => {
    const isReverse = sort.sortKey == sortKey && !sort.isReverse
    setSort({ sortKey: sortKey, isReverse: isReverse })
  }

  const sortFunction = SORTS[sort.sortKey]
  const sortedList = sort.isReverse ? sortFunction(stories).reverse() : sortFunction(stories)

  return (
    <ul className={classnames(className)}>
      <li className='flex my-5'>
        <button
          onClick={() => handleSort('TITLE')}
          className='mr-4 px-3 py-1 bg-slate-400 rounded-md'
        >
          Title
        </button>
        <button
          onClick={() => handleSort('AUTHOR')}
          className='mr-4 px-3 py-1 bg-slate-400 rounded-md'
        >
          Author
        </button>
        <button onClick={() => handleSort('COMMENT')} className='px-3 py-1 bg-slate-400 rounded-md'>
          Comments
        </button>
        <span className='col-span-2'></span>
      </li>
      <li className='grid grid-cols-8 gap-1 bg-blue-300 px-4'>
        <span className='col-span-4'>Title</span>
        <span className='col-span-3'>Author</span>
        <span className='col-span-1'>Comments</span>
      </li>
      {sortedList.map((s) => (
        <ListItem key={s.objectID} story={s} />
      ))}
    </ul>
  )
}

export default HackerNewsList
