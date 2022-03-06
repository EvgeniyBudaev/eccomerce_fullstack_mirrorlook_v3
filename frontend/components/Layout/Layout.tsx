import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import classNames from "classnames";
import { ROUTES } from "constants/routes";
import { scrollSelector } from "ducks/selectors";
import { useMounted } from "hooks/useMounted";
import { useSelector } from "hooks";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.scss";

export interface ILayoutProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  is404?: boolean;
}

export const Layout: React.FC<ILayoutProps> = ({
  className,
  children,
  is404,
}) => {
  const { hasMounted } = useMounted();
  const router = useRouter();
  const scroll = useSelector(scrollSelector);
  const { isScroll } = hasMounted && scroll;

  return (
    <div className={classNames(styles.Layout, className)}>
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
              <div
                className={classNames(styles.Container, {
                  [styles.Container__is404]: is404,
                })}
              >
                {children}
              </div>
            )}
          </main>
        </div>
        {router.pathname !== ROUTES.SHIPPING && !is404 && <Footer />}
      </div>
    </div>
  );
};
