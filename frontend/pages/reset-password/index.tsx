import Head from "next/head";
import React from "react";
import { Layout, ResetPassword } from "components";

export default function ResetPasswordPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <title>Сброс пароля | MirrorLook</title>
      </Head>
      <Layout>
        <ResetPassword />
      </Layout>
    </>
  );
}
