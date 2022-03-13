import React from "react";
import { HeadApplication, Layout, ResetPassword } from "components";

export default function ResetPasswordPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        title="Сброс пароля | MirrorLook"
      />
      <Layout>
        <ResetPassword />
      </Layout>
    </>
  );
}
