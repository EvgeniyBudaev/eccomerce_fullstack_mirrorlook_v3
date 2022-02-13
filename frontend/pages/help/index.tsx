import Head from "next/head";
import React from "react";
import { Layout, Help } from "components";

export default function HelpPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Доставка и оплата | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Доставка и оплата | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Доставка и оплата | Интернет-магазин зеркал MirrorLook"
        />
        <title>Доставка и оплата | MirrorLook</title>
      </Head>
      <Layout>
        <Help />
      </Layout>
    </>
  );
}
