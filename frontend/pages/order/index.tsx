import Head from "next/head";
import React from "react";
import { Layout, Order } from "components";

export default function OrderPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Оформление заказа | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Оформление заказа | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Оформление заказа | Интернет-магазин зеркал MirrorLook"
        />
        <title>Оформление заказа | MirrorLook</title>
      </Head>
      <Layout>
        <Order />
      </Layout>
    </>
  );
}
