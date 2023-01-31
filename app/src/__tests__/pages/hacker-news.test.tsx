import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'

import HackerNews from '../../pages/hacker-news'

const stories = [
  {
    title: 'Apple stories',
    author: 'Steve Jobs',
    objectID: '3',
    num_comments: 0,
  },
  {
    title: 'Brazilian styles',
    author: 'Arthur Antunes Coimbra',
    objectID: '2',
    num_comments: 10,
  },
  {
    title: 'Common Sense',
    author: 'Thomas Paine',
    objectID: '1',
    num_comments: 100,
  },
]

const dataStoriesMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({ hits: stories }),
    })
  })

const statusErrorStoriesMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: false,
      status: 400,
      json: async () => ({ hits: stories }),
    })
  })

describe('hacker-news page', () => {
  afterAll(() => {
    ;(global.fetch as jest.Mock).mockClear()
  })

  test('render:loding', async () => {
    global.fetch = jest.fn().mockImplementation(dataStoriesMock)
    render(<HackerNews />)

    screen.getByText('Loading...')
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  })

  test('render:stories', async () => {
    global.fetch = jest.fn().mockImplementation(dataStoriesMock)
    render(<HackerNews />)

    screen.getByText('Loading...')
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

    expect(screen.getByText('Apple stories')).toBeInTheDocument()
    expect(screen.getByText('Brazilian styles')).toBeInTheDocument()
    expect(screen.getByText('Common Sense')).toBeInTheDocument()
  })

  test('error', async () => {
    global.fetch = jest.fn().mockImplementation(statusErrorStoriesMock)
    const spy = jest.spyOn(console, 'error')

    render(<HackerNews />)
    await waitFor(() => screen.getByText('Something went wrong!'))
    spy.mockRestore()
  })
})
