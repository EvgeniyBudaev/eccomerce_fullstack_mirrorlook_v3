import React from "react";
import { HeadApplication, Layout, Thanks } from "components";

export default function ThanksPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Спасибо за заказ! | Интернет-магазин зеркал MirrorLook"
        title="Спасибо за заказ! | MirrorLook"
      />
      <Layout>
        <Thanks />
      </Layout>
    </>
  );
}
