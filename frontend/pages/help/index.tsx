import React from "react";
import { HeadApplication, Help, Layout } from "components";

export default function HelpPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Доставка и оплата | Интернет-магазин зеркал MirrorLook"
        title="Доставка и оплата | MirrorLook"
      />
      <Layout>
        <Help />
      </Layout>
    </>
  );
}
