import Head from "next/head";
import React from "react";
import { Layout, Contacts } from "components";

export default function ContactsPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Контакты | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Контакты | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Контакты | Интернет-магазин зеркал MirrorLook"
        />
        <title>Контакты | MirrorLook</title>
      </Head>
      <Layout>
        <Contacts />
      </Layout>
    </>
  );
}
