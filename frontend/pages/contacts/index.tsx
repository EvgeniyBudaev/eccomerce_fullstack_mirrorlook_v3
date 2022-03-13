import React from "react";
import { Contacts, HeadApplication, Layout } from "components";

export default function ContactsPage(): JSX.Element {
  return (
    <>
      <HeadApplication
        content="Контакты | Интернет-магазин зеркал MirrorLook"
        title="Контакты | MirrorLook"
      />
      <Layout>
        <Contacts />
      </Layout>
    </>
  );
}
