import React from "react";
import { HeadApplication, Layout, About } from "components";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="О магазине | Интернет-магазин зеркал MirrorLook"
        title="О магазине | MirrorLook"
      />
      <Layout>
        <About />
      </Layout>
    </>
  );
}
