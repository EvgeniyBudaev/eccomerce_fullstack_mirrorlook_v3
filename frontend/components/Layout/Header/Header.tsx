import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Overlay } from "ui-kit";
import { TRANSITION } from "constants/transition";
import { CatalogDropDown } from "components/Layout";
import { ActionTypes } from "ducks/scroll";
import useWindowScroll from "hooks/useWindowScroll";
import HeaderBottom from "./HeaderBottom";
import HeaderCenter from "./HeaderCenter";
import styles from "./Header.module.scss";

export interface IHeaderProps {
  className?: string;
  isHomePage?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ isHomePage }) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const headerRef = useRef(null);
  const offset = headerRef.current;
  const isScroll = useWindowScroll({ timerLength: offset });

  useEffect(() => {
    dispatch({
      type: ActionTypes.FETCH_SCROLL,
      payload: { isScroll: isScroll },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScroll]);

  const handleCatalogToggle = () => {
    setIsCatalogOpen(prevState => !prevState);
  };

  const handleCatalogClose = () => {
    setIsCatalogOpen(false);
  };

  return (
    <>
      <div
        className={classNames(styles.HeaderWrapper, {
          [styles.HeaderWrapper__isCatalogOpen]: isCatalogOpen,
          [styles.HeaderWrapper__isHomePage]: isHomePage,
          [styles.HeaderWrapper__isScroll]: isScroll,
        })}
      >
        <div className={styles.HeaderContainer}>
          <header className={styles.Header} ref={headerRef}>
            <HeaderCenter
              isCatalogOpen={isCatalogOpen}
              onCatalogToggle={handleCatalogToggle}
            />
            <HeaderBottom
              isCatalogOpen={isCatalogOpen}
              onCatalogToggle={handleCatalogToggle}
            />
          </header>
        </div>
      </div>
      <CSSTransition
        className="CatalogWindow"
        in={isCatalogOpen}
        nodeRef={nodeRef}
        timeout={TRANSITION}
        unmountOnExit
      >
        <CatalogDropDown ref={nodeRef} />
      </CSSTransition>
      <Overlay
        timeout={TRANSITION}
        onClick={handleCatalogClose}
        isActive={isCatalogOpen}
      />
    </>
  );
};
