import React from "react";
import { Confirm, HeadApplication, Layout } from "components";

export default function ConfirmResetPasswordPage(): JSX.Element {
  const content = "На ваш email отправлено письмо для сброса пароля.";
  const title = "Подтверждение сброса пароля";

  return (
    <>
      <HeadApplication
        content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        title="Подтверждение сброса пароля | MirrorLook"
      />
      <Layout>
        <Confirm content={content} title={title} />
      </Layout>
    </>
  );
}
