import React from "react";
import { Logo, Search } from "components";
import { Button, Hamburger } from "ui-kit";
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
            <Button className={styles.ButtonSidebar} onClick={() => {}}>
              <Hamburger
                className={styles.HamburgerSidebar}
                color="black"
                isOpen={false}
              />
            </Button>
            <Logo className={styles.LogoMobile} />
            <HeaderIconsList className={styles.HeaderIconsListMobile} />
          </div>
        </div>
      </div>
    </div>
  );
};
