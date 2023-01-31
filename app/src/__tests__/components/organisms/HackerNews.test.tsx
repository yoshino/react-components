import { fireEvent, render, screen } from '@testing-library/react'

import HackerNewsList from '../../../components/organisms/HackerNewsList'

const stories = [
  {
    title: 'Brazilian styles',
    author: 'Arthur Antunes Coimbra',
    objectID: '2',
    num_comments: 10,
  },
  {
    title: 'Apple stories',
    author: 'Steve Jobs',
    objectID: '3',
    num_comments: 0,
  },
  {
    title: 'Common Sense',
    author: 'Thomas Paine',
    objectID: '1',
    num_comments: 100,
  },
]

describe('HackerNewsList', () => {
  test('sort by comments', async () => {
    render(<HackerNewsList stories={stories} />)
    const items = screen.getAllByRole('listitem')
    expect(items[2]).toHaveTextContent('Brazilian styles')
    const button = screen.getByRole('button', { name: 'Comments' })
    fireEvent.click(button)
    const sortedItems = screen.getAllByRole('listitem')
    expect(sortedItems[2]).toHaveTextContent('Apple stories')
  })
})
