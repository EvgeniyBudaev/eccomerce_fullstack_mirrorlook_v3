import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import classNames from "classnames";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import Banner from "./Header/Banner";
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
  const { hasMounted } = useMounted();
  const router = useRouter();
  const scroll = useTypedSelector(state => state.scroll);
  const { isScroll } = hasMounted && scroll;

  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title} | MirrorLook</title>
      </Head>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <Banner />
          <Header />
          <main
            className={classNames(styles.Main, {
              [styles.Main__isScroll]: isScroll,
            })}
          >
            {router.pathname === "/" ? (
              <div className={styles.ContainerHomePage}>{children}</div>
            ) : (
              <div className={styles.Container}>{children}</div>
            )}
          </main>
        </div>
        {router.pathname !== "/shipping" && <Footer />}
      </div>
    </div>
  );
};
