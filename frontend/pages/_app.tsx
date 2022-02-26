import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import ym, { YMInitializer } from "react-yandex-metrika";
import { backendBase } from "constants/paths";
import { store } from "ducks/store";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const path = router.asPath.substring(1);
  if (router.events) {
    router.events.on("routeChangeComplete", (url: string) => {
      if (typeof window !== "undefined") {
        ym("hit", url);
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
        <title>MirrorLook | Интернет-магазин зеркал </title>
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
