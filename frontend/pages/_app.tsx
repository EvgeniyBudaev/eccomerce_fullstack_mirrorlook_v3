import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../styles/globals.scss";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
