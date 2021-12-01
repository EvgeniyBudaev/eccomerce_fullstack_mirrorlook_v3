import React from "react";
import classNames from "classnames";
import { NavLink, Search } from "components";
import { TRANSITION } from "constants/transition";
import { Button, Hamburger, Spacer } from "ui-kit";
import styles from "./HeaderBottom.module.scss";

export interface IHeaderBottomProps {
  className?: string;
  isCatalogOpen?: boolean;
  isHomePage?: boolean;
  onCatalogToggle?: () => void;
}

export const HeaderBottom: React.FC<IHeaderBottomProps> = ({
  className,
  isCatalogOpen,
  isHomePage,
  onCatalogToggle,
}) => {
  return (
    <div
      className={classNames(styles.HeaderBottom, className, {
        [styles.HeaderBottom__catalogOpen]: isCatalogOpen,
        [styles.HeaderBottom__isHomePage]: isHomePage,
      })}
    >
      <div className={styles.Desktop}>
        <div className={styles.Info}>
          <div className={styles.InfoInner}>
            <div className={styles.InfoLeft}>
              <Button
                className={styles.ButtonCatalog}
                onClick={onCatalogToggle}
              >
                <Hamburger
                  className={styles.ButtonCatalogHamburger}
                  color="white"
                  isActive={isCatalogOpen}
                />
                <div className={styles.ButtonCatalogText}>Каталог</div>
              </Button>
            </div>
            <Spacer />
            <Search
              className={styles.SearchControlsDesktop}
              transition={TRANSITION}
              isHomePage={isHomePage}
            />
            <Spacer />
            <div className={styles.InfoRight}>
              <NavLink href={"/about"} activeClassName={styles.Text__isActive}>
                <a className={styles.Text}>О компании</a>
              </NavLink>
              <NavLink href={"/help"} activeClassName={styles.Text__isActive}>
                <a className={styles.Text}>Доставка и оплата</a>
              </NavLink>
              <NavLink
                href={"/contacts"}
                activeClassName={styles.Text__isActive}
              >
                <a className={styles.Text}>Контакты</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Search className={styles.SearchControlsMobile} />
    </div>
  );
};
