import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import AppHeader from 'src/components/Header'
import AppFooter from 'src/components/Footer'
import AppNav from 'src/components/Nav'
import '../../styles/globals.css'
import { Provider } from "react-redux";
import allReducers from "src/redux/reducers";
import withRedux from 'next-redux-wrapper';
import wrapper from "src/redux/store";
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(allReducers)
  return (
    <>

      <AppHeader />
      <AppNav />
      <Component {...pageProps} />
      <AppFooter />

    </>
  )

}
export default wrapper.withRedux(MyApp);
