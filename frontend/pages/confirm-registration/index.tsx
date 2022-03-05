import Head from "next/head";
import React from "react";
import { Layout, Confirm } from "components";

export default function ConfirmRegistrationPage(): JSX.Element {
  const content =
    "На ваш email отправлено письмо для активации аккаунта. Пожалуйста,\n" +
    "            подтвердите ваш email.";
  const title = "Подтверждение регистрации";

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
        <Confirm content={content} title={title} />
      </Layout>
    </>
  );
}
