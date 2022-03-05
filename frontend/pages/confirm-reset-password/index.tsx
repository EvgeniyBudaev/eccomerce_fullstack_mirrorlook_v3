import Head from "next/head";
import React from "react";
import { Layout, Confirm } from "components";

export default function ConfirmResetPasswordPage(): JSX.Element {
  const content = "На ваш email отправлено письмо для сброса пароля.";
  const title = "Подтверждение сброса пароля";

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <title>Подтверждение сброса пароля | MirrorLook</title>
      </Head>
      <Layout>
        <Confirm content={content} title={title} />
      </Layout>
    </>
  );
}
