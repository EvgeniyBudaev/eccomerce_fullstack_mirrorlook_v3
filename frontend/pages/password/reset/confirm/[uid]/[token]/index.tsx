import Head from "next/head";
import React from "react";
import { Layout, NewPassword } from "components";

export default function ResetPasswordConfirmPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Новый пароль | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Новый пароль | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Новый пароль | Интернет-магазин зеркал MirrorLook"
        />
        <title>Новый пароль | MirrorLook</title>
      </Head>
      <Layout>
        <NewPassword />
      </Layout>
    </>
  );
}
