import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Logo, Search, Sidebar } from "components";
import { Button, Hamburger, Overlay } from "ui-kit";
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
  const TRANSITION = 500;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.HeaderCenter}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.InnerDesktop}>
            <Logo />
            <Button className={styles.ButtonCatalog} onClick={onCatalogToggle}>
              <Hamburger
                className={styles.ButtonCatalogHamburger}
                color="white"
                isOpen={isCatalogOpen}
              />
              <div className={styles.ButtonCatalogText}>Каталог</div>
            </Button>
            <Search className={styles.SearchControlsDesktop} />
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
                isOpen={isSidebarOpen}
              />
            </Button>
            <Logo className={styles.LogoMobile} />
            <HeaderIconsList className={styles.HeaderIconsListMobile} />
            <Overlay
              timeout={TRANSITION}
              onClick={handleSidebarClose}
              isActive={isSidebarOpen}
            />
            <CSSTransition
              className="SidebarWindow"
              in={isSidebarOpen}
              nodeRef={nodeRef}
              timeout={TRANSITION}
              unmountOnExit
            >
              <Sidebar ref={nodeRef} />
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};
