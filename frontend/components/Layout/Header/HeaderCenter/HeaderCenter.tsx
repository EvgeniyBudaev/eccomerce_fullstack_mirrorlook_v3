import Link from "next/link";
import React, { useRef, useState } from "react";
import { Logo, SidebarMobile } from "components";
import { Button, Hamburger, Sidebar, Spacer } from "ui-kit";
import { HeaderIconsList } from "./HeaderIconsList";
import styles from "./HeaderCenter.module.scss";

export interface IHeaderCenterProps {
  isCatalogOpen?: boolean;
  onCatalogToggle?: () => void;
}

export const HeaderCenter: React.FC<IHeaderCenterProps> = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const nodeRef = useRef(null);

  const handleSidebarOpen = () => {
    setIsSidebar(true);
  };

  const handleSidebarClose = () => {
    setIsSidebar(false);
  };

  return (
    <div className={styles.HeaderCenter}>
      <div className={styles.Inner}>
        <div className={styles.InnerDesktop}>
          <div>
            <Link href={"tel:+74999999999"}>
              <a className={styles.Text}>+7 (499) 999-99-99</a>
            </Link>
          </div>
          <Spacer />
          <Logo />
          <Spacer />
          <HeaderIconsList className={styles.Desktop} />
        </div>
        <div className={styles.Mobile}>
          <Button className={styles.ButtonSidebar} onClick={handleSidebarOpen}>
            <Hamburger
              className={styles.HamburgerSidebar}
              color="black"
              isActive={isSidebar}
            />
          </Button>
          <Logo className={styles.LogoMobile} />
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
