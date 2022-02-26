import Head from "next/head";
import React from "react";
import { Layout, ConfirmRegistration } from "components";

export default function ConfirmRegistrationPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Подтверждение регистрации | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Подтверждение регистрации | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Подтверждение регистрации | Интернет-магазин зеркал MirrorLook"
        />
        <title>Подтверждение регистрации | MirrorLook</title>
      </Head>
      <Layout>
        <ConfirmRegistration />
      </Layout>
    </>
  );
}
