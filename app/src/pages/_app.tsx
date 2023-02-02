import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useAxe } from '../hooks/useAxe'

export default function App({ Component, pageProps }: AppProps) {
  useAxe()

  return (
    <div>
      <Head>
        <title>React Components</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
