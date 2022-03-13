import React from "react";
import { HeadApplication, Layout, Order } from "components";

export default function OrderPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Оформление заказа | Интернет-магазин зеркал MirrorLook"
        title="Оформление заказа | MirrorLook"
      />
      <Layout>
        <Order />
      </Layout>
    </>
  );
}
