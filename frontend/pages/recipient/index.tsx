import React from "react";
import { HeadApplication, Layout, Recipient } from "components";

export default function RecipientPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Получатель | Интернет-магазин зеркал MirrorLook"
        title="Получатель | MirrorLook"
      />
      <Layout>
        <Recipient />
      </Layout>
    </>
  );
}
