import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import classNames from "classnames";
import { ROUTES } from "constants/routes";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { hasMounted } = useMounted();
  const router = useRouter();
  const scroll = useTypedSelector(state => state.scroll);
  const { isScroll } = hasMounted && scroll;

  return (
    <div className={styles.Layout}>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <Header />
          <main
            className={classNames(styles.Main, {
              [styles.Main__isScroll]: isScroll,
            })}
          >
            {router.pathname === ROUTES.HOME ? (
              <div className={styles.ContainerHomePage}>{children}</div>
            ) : (
              <div className={styles.Container}>{children}</div>
            )}
          </main>
        </div>
        {router.pathname !== ROUTES.SHIPPING && <Footer />}
      </div>
    </div>
  );
};
