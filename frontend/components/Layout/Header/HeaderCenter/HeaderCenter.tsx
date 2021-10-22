import React from "react";
import { Logo } from "components";
import { Button, Hamburger, Search } from "ui-kit";
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
          <div className={styles.InnerLeft}>
            <Logo />
            <Button className={styles.ButtonCatalog} onClick={onCatalogToggle}>
              <Hamburger
                className={styles.ButtonCatalogHamburger}
                color="white"
                isOpen={isCatalogOpen}
              />
              <div className={styles.ButtonCatalogText}>Каталог</div>
            </Button>
            <Search className={styles.SearchControls} />
          </div>
          <HeaderIconsList />
        </div>
      </div>
    </div>
  );
};
