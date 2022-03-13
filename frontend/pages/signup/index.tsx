import React from "react";
import { HeadApplication, Layout } from "components";
import { Signup } from "components/Auth";

export default function SignupPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Регистрация | Интернет-магазин зеркал MirrorLook"
        title="Регистрация | MirrorLook"
      />
      <Layout>
        <Signup />
      </Layout>
    </>
  );
}
