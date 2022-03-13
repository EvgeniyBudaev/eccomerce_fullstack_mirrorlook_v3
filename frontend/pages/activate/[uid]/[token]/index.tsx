import React from "react";
import { HeadApplication, Layout } from "components";
import { Activate } from "components/Auth";

export default function ActivateByUidAndTokenPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Активация | Подтверждение по email | Интернет-магазин зеркал MirrorLook"
        title="Активация | Подтверждение по email | Интернет-магазин зеркал MirrorLook"
      />
      <Layout>
        <Activate />
      </Layout>
    </>
  );
}
