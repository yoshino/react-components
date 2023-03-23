import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-10'>
      <h1 className='text-3xl mb-4'>Links</h1>
      <Link href='/hacker-news' legacyBehavior>
        <a className='text-xl text-blue-300 font-bold my-4'>HackerNews(API Fetch)</a>
      </Link>
    </div>
  )
}
