import Head from "next/head";
import React from "react";
import { Layout, Recipient } from "components";

export default function RecipientPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Получатель | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Получатель | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Получатель | Интернет-магазин зеркал MirrorLook"
        />
        <title>Получатель | MirrorLook</title>
      </Head>
      <Layout>
        <Recipient />
      </Layout>
    </>
  );
}
