import Head from "next/head";
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export default function Layout({children, title = "Интернет-магизин зеркал"}: ILayoutProps): JSX.Element {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title} | MirrorLook</title>
      </Head>
      <h1>Layout</h1>
      <main>{children}</main>
    </div>
  );
}
