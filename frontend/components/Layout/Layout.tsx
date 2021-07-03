import Head from "next/head";
import { ReactNode } from 'react';
import styles from "./Layout.module.scss";
import { Header } from "components";

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export default function Layout({children, title = "Интернет-магазин зеркал"}: ILayoutProps): JSX.Element {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title} | MirrorLook</title>
      </Head>
      <div className={styles.Container}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
