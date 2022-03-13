import React from "react";
import { HeadApplication, Layout, NewPassword } from "components";

export default function ResetPasswordConfirmPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Новый пароль | Интернет-магазин зеркал MirrorLook"
        title="Новый пароль | MirrorLook"
      />
      <Layout>
        <NewPassword />
      </Layout>
    </>
  );
}
