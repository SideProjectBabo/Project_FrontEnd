import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import AppHeader from 'src/components/Header'
import AppFooter from 'src/components/Footer'
import AppNav from 'src/components/Nav'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <AppNav/>
      <Component {...pageProps} />
      <AppFooter/>
    </>
  )

}
export default MyApp
