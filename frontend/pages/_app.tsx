import {AppProps} from "next/dist/next-server/lib/router/router";
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="description" content="Интернет магазин зеркал"/>
      <meta name="keywords" content="зеркало, магазин, купить, цена"/>
      <title>MirrorLook интернет-магазин зеркал </title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
