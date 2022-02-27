import Head from "next/head";
import React from "react";
import { Layout, Thanks } from "components";

export default function ThaksPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Спасибо за заказ! | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Спасибо за заказ! | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Спасибо за заказ! | Интернет-магазин зеркал MirrorLook"
        />
        <title>Спасибо за заказ! | MirrorLook</title>
      </Head>
      <Layout>
        <Thanks />
      </Layout>
    </>
  );
}
