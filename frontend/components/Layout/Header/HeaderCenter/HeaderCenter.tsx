import React, { useRef, useState } from "react";
import { TRANSITION } from "constants/transition";
import { Logo, Search, SidebarMobile } from "components";
import { Button, Hamburger, Sidebar } from "ui-kit";
import { HeaderIconsList } from "./HeaderIconsList";
import styles from "./HeaderCenter.module.scss";

export interface IHeaderCenterProps {
  isCatalogOpen?: boolean;
  onCatalogToggle?: () => void;
}

export const HeaderCenter: React.FC<IHeaderCenterProps> = ({
  isCatalogOpen,
  onCatalogToggle,
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
    <div className={styles.HeaderCenter}>
      <div className={styles.Inner}>
        <div className={styles.InnerDesktop}>
          <Logo />
          <Button className={styles.ButtonCatalog} onClick={onCatalogToggle}>
            <Hamburger
              className={styles.ButtonCatalogHamburger}
              color="white"
              isActive={isCatalogOpen}
            />
            <div className={styles.ButtonCatalogText}>Каталог</div>
          </Button>
          <Search
            className={styles.SearchControlsDesktop}
            transition={TRANSITION}
          />
        </div>
        <HeaderIconsList className={styles.Desktop} />
        <div className={styles.Mobile}>
          <Button
            className={styles.ButtonSidebar}
            onClick={handleSidebarOpen}
          >
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
