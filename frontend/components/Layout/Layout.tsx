import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
  title = "Интернет-магазин зеркал",
}) => {
  const router = useRouter();

  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title} | MirrorLook</title>
      </Head>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <Header />
          <main className={styles.Main}>
            <div className={styles.Container}>{children}</div>
          </main>
        </div>
        {router.pathname !== "/shipping" && <Footer />}
      </div>
    </div>
  );
};
