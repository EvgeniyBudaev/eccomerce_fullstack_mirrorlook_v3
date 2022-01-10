import Head from "next/head";
import React from "react";
import { Layout } from "components";
import { Signup } from "components/Auth";

export default function SignupPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Регистрация | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Регистрация | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Регистрация | Интернет-магазин зеркал MirrorLook"
        />
        <title>Регистрация | MirrorLook</title>
      </Head>
      <Layout>
        <Signup />
      </Layout>
    </>
  );
}
