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
}

export const HeaderCenter: React.FC<IHeaderCenterProps> = ({
  className,
  isHomePage,
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
      })}
    >
      <div className={styles.Inner}>
        <div className={styles.InnerDesktop}>
          <div>
            <Link href={"tel:+74999999999"}>
              <a className={styles.Text}>+7 (499) 999-99-99</a>
            </Link>
          </div>
          <Spacer />
          <Logo isHomePage={isHomePage} />
          <Spacer />
          <HeaderIconsList className={styles.Desktop} isHomePage={isHomePage} />
        </div>
        <div className={styles.Mobile}>
          <Button className={styles.ButtonSidebar} onClick={handleSidebarOpen}>
            <Hamburger
              className={styles.HamburgerSidebar}
              color="black"
              isActive={isSidebar}
            />
          </Button>
          <Logo className={styles.LogoMobile} isHomePage={isHomePage} />
          <HeaderIconsList className={styles.HeaderIconsListMobile} />
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
  );
};
