import { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import { Provider } from "react-redux";
import ym, { YMInitializer } from "react-yandex-metrika";
import NProgress from "nprogress";
import { backendBase } from "constants/paths";
import { store } from "ducks/store";
import { Spinner } from "ui-kit";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const path = router.asPath.substring(1);
  if (router.events) {
    router.events.on("routeChangeStart", (url: string) => {
      NProgress.start();
      //setIsLoading(true);
    });
    router.events.on("routeChangeComplete", (url: string) => {
      if (typeof window !== "undefined") {
        ym("hit", url);
        //setIsLoading(false);
        NProgress.done();
      }
    });
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Интернет магазин зеркал" />
        <meta name="keywords" content="зеркало, магазин, купить, цена" />
        <meta property="og:url" content={backendBase + path} />
        <meta property="og:locale" content="ru_RU" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>MirrorLook | Интернет-магазин зеркал </title>
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Provider store={store}>
        {/*{isLoading ? <Spinner/> : <Component {...pageProps} />}*/}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
