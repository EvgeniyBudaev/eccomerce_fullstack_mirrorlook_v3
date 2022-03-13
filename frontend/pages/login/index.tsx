import React from "react";
import { HeadApplication, Layout } from "components";
import { Login } from "components/Auth";

export default function LoginPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Авторизация | Интернет-магазин зеркал MirrorLook"
        title="Авторизация | MirrorLook"
      />
      <Layout>
        <Login />
      </Layout>
    </>
  );
}
