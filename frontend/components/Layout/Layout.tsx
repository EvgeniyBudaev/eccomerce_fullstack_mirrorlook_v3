import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "components";
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
  title = "Интернет-магазин зеркал",
}) => {
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
};
