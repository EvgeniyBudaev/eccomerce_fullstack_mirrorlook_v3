import Head from "next/head";
import React from "react";
import { Layout, About } from "components";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="О магазине | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="О магазине | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="О магазине | Интернет-магазин зеркал MirrorLook"
        />
        <title>О магазине | MirrorLook</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
