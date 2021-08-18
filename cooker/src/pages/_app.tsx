import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import AppHeader from 'src/components/Header'
import AppFooter from 'src/components/Footer'
import AppNav from 'src/components/Nav'
import '../../styles/globals.css'
import { Provider } from "react-redux";
import allReducers from "src/redux/reducers";
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IMAGES } from 'src/commons/variables'
import Main from 'src/components/main'
function MyApp({ Component, pageProps }: AppProps) {

  
  const store = createStore(allReducers)
  return (
    <>
      <Provider store={store}>
        <AppHeader />
        {/* <AppNav /> */}
        <Component {...pageProps} />
        <AppFooter />
      </Provider>
    </>
  )

}
export default MyApp
