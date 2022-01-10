import Head from "next/head";
import React from "react";
import { Layout } from "components";
import { Activate } from "components/Auth";

export default function ActivateByUidAndTokenPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Активация | Подтверждение по email | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Активация | Подтверждение по email | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Активация | Подтверждение по email | Интернет-магазин зеркал MirrorLook"
        />
        <title>
          Активация | Подтверждение по email | Интернет-магазин зеркал
          MirrorLook
        </title>
      </Head>
      <Layout>
        <Activate />
      </Layout>
    </>
  );
}
