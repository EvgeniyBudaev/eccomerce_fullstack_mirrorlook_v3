import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Overlay } from "ui-kit";
import { CatalogDropDown } from "components/Layout";
import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
import HeaderTop from "./HeaderTop";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const nodeRef = useRef(null);

  const handleCatalogToggle = () => {
    setIsCatalogOpen(prevState => !prevState);
  };

  const handleCatalogClose = () => {
    setIsCatalogOpen(false);
  };

  return (
    <div className={styles.HeaderWrapper}>
      <header className={styles.Header}>
        <HeaderTop />
        <HeaderCenter
          isCatalogOpen={isCatalogOpen}
          onCatalogToggle={handleCatalogToggle}
        />
        <HeaderBottom isCatalogOpen={isCatalogOpen} />
      </header>
      <Overlay onClick={handleCatalogClose} isActive={isCatalogOpen} />
      <CSSTransition
        className="CatalogWindow"
        in={isCatalogOpen}
        nodeRef={nodeRef}
        timeout={900}
        unmountOnExit
      >
        <CatalogDropDown ref={nodeRef} />
      </CSSTransition>
    </div>
  );
};
