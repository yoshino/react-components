import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useAxe } from '../hooks/useAxe'

export default function App({ Component, pageProps }: AppProps) {
  useAxe()

  return <Component {...pageProps} />
}
