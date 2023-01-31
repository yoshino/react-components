import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl mb-4'>Hi!</h1>
      <Link href='/hacker-news' legacyBehavior>
        <a className=' bg-blue-300 text-white py-1 px-3 rounded-md'>HackerNews(API Fetch)</a>
      </Link>
    </div>
  )
}
