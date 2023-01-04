import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout component={<Component {...pageProps} />} />
}

export default MyApp
