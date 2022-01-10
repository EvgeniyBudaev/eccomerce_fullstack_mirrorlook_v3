import Head from "next/head";
import React from "react";
import { Layout } from "components";
import { Login } from "components/Auth";

export default function LoginPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Авторизация | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Авторизация | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Авторизация | Интернет-магазин зеркал MirrorLook"
        />
        <title>Авторизация | MirrorLook</title>
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
}
