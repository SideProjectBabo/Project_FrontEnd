
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import type { AppProps } from 'next/app'
import AppHeader from 'src/components/Header'
const { Header, Footer, Content } = Layout;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Header style={{backgroundColor:"white"}} >
          <AppHeader />
        </Header >
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </>
  )

}
export default MyApp
