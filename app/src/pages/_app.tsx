import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAxe } from '../hooks/useAxe'
import Head from 'next/head'

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
