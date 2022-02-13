import Link from "next/link";
import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Logo, SidebarMobile } from "components";
import { Button, Hamburger, Sidebar, Spacer } from "ui-kit";
import { HeaderIconsList } from "./HeaderIconsList";
import styles from "./HeaderCenter.module.scss";

export interface IHeaderCenterProps {
  className?: string;
  isHomePage?: boolean;
  isScroll?: boolean;
}

export const HeaderCenter: React.FC<IHeaderCenterProps> = ({
  className,
  isHomePage,
  isScroll,
}) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const nodeRef = useRef(null);

  const handleSidebarOpen = () => {
    setIsSidebar(true);
  };

  const handleSidebarClose = () => {
    setIsSidebar(false);
  };

  return (
    <div
      className={classNames(styles.HeaderCenter, className, {
        [styles.HeaderCenter__isHomePage]: isHomePage,
        [styles.HeaderCenter__isScroll]: isScroll,
      })}
    >
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.InnerDesktop}>
            <div>
              <Link href={"tel:+79955053978"}>
                <a className={styles.Text}>+7 (995) 505-39-78</a>
              </Link>
            </div>
            <Spacer />
            <Logo isHomePage={isHomePage} />
            <Spacer />
            <HeaderIconsList
              className={styles.Desktop}
              isHomePage={isHomePage}
            />
          </div>
          <div className={styles.Mobile}>
            <Button
              className={classNames(styles.ButtonSidebar, {
                [styles.ButtonSidebar__isHomePage]: isHomePage,
              })}
              onClick={handleSidebarOpen}
            >
              <Hamburger
                className={styles.HamburgerSidebar}
                color={isHomePage ? "white" : "black"}
                isActive={isSidebar}
                isHomePage={isHomePage}
              />
            </Button>
            <Logo className={styles.LogoMobile} isHomePage={isHomePage} />
            <HeaderIconsList
              className={styles.HeaderIconsListMobile}
              isHomePage={isHomePage}
            />
            <Sidebar
              ref={nodeRef}
              isActive={isSidebar}
              onClose={handleSidebarClose}
            >
              <SidebarMobile />
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};
