import React from "react";
import { HeadApplication, Layout, YMap } from "components";

export default function ShippingPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Доставка | Интернет-магазин зеркал MirrorLook"
        title="Доставка | MirrorLook"
      />
      <Layout>
        <YMap />
      </Layout>
    </>
  );
}
