import Head from "next/head";
import React from "react";
import { Layout, YMap } from "components";

export default function ShippingPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Доставка | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Доставка | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Доставка | Интернет-магазин зеркал MirrorLook"
        />
        <title>Доставка | MirrorLook</title>
      </Head>
      <Layout>
        <YMap />
      </Layout>
    </>
  );
}
