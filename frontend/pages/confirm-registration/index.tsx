import React from "react";
import { Confirm, HeadApplication, Layout } from "components";

export default function ConfirmRegistrationPage(): JSX.Element {
  const content =
    "На ваш email отправлено письмо для активации аккаунта. Пожалуйста,\n" +
    "            подтвердите ваш email.";
  const title = "Подтверждение регистрации";

  return (
    <>
      <HeadApplication
        content="Подтверждение регистрации | Интернет-магазин зеркал MirrorLook"
        title="Подтверждение регистрации | MirrorLook"
      />
      <Layout>
        <Confirm content={content} title={title} />
      </Layout>
    </>
  );
}
