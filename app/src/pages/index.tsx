import Link from '../components/atoms/Link'
import Title from '../components/atoms/Title'

export default function Home() {
  return (
    <div className='m-10 flex flex-col'>
      <Title className='mb-4'>Links</Title>
      <Link className='my-2' href='/hacker-news'>
        HackerNews(API Fetch)
      </Link>
      <Link className='my-2' href='/hacker-news'>
        Accordion with local storage
      </Link>
    </div>
  )
}
