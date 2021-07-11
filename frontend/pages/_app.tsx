import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import { store } from "ducks/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Интернет магазин зеркал" />
        <meta name="keywords" content="зеркало, магазин, купить, цена" />
        <title>MirrorLook интернет-магазин зеркал </title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
