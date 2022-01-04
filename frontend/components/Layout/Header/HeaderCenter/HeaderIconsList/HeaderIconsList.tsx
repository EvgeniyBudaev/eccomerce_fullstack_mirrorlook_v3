import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import isNull from "lodash/isNull";
import { Avatar, DropDown, Icon } from "ui-kit";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ActionTypes } from "ducks/account";
import { ICartState } from "ducks/cart";
import { IAccount } from "api/types/account";
import { ROUTES } from "constants/routes";
import styles from "./HeaderIconsList.module.scss";

export interface IHeaderIconsListProps {
  className?: string;
  isHomePage?: boolean;
}

export const HeaderIconsList: React.FC<IHeaderIconsListProps> = ({
  className,
  isHomePage,
}) => {
  const [cartId, setCartId] = useState("");
  const [cartItemsCountTotal, setCartItemsCountTotal] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const account = useTypedSelector(state => state.account);
  const cart = useTypedSelector(state => state.cart);
  const refToggleDropDown = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const getAccount = (account: IAccount) => {
    return account;
  };

  const getCartId = (cart: ICartState) => {
    return String(cart.id);
  };

  const getCartItemsCountTotal = (cart: ICartState) => {
    return cart.entities.reduce((acc, item) => acc + item.quantity, 0);
  };

  useEffect(() => {
    async function fetchAccount(account) {
      const response = await getAccount(account);
      setIsAuthenticated(response.isAuthenticated);
    }
    fetchAccount(account);
  }, [account]);

  useEffect(() => {
    async function fetchCartId(cart) {
      const response = await getCartId(cart);
      setCartId(response);
    }
    async function fetchCartItemsCountTotal(cart) {
      const response = await getCartItemsCountTotal(cart);
      setCartItemsCountTotal(response);
    }
    fetchCartId(cart);
    fetchCartItemsCountTotal(cart);
  }, [cart]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutsideDropDown);
    };
  });

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (isDropDownOpen && !refToggleDropDown.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    console.log("EXIT");
    dispatch({
      type: ActionTypes.FETCH_LOGOUT,
    });
    router.push(ROUTES.HOME);
  };

  return (
    <div
      className={classNames(styles.HeaderIconsList, className, {
        [styles.HeaderIconsList__isHomePage]: isHomePage,
      })}
    >
      <div className={styles.HeaderIconListItem}>
        {!isNull(cartId) && (
          <div>
            <Link
              href={{
                pathname: `${ROUTES.CART}${cartId}`,
              }}
            >
              <a className={styles.IconLink}>
                <Icon className={styles.Icon} type="Cart" />
                <div className={styles.IconDescription}>Корзина</div>
                <div className={styles.CartItemsCount}>
                  {cartItemsCountTotal}
                </div>
              </a>
            </Link>
          </div>
        )}
      </div>
      <div
        className={classNames(
          styles.HeaderIconListItem,
          styles.HeaderIconListItemDesktop
        )}
      >
        {isAuthenticated ? (
          <div className={styles.AvatarDropDown} ref={refToggleDropDown}>
            <Avatar
              user={
                isAuthenticated && account.user ? account.user.first_name : null
              }
              size={46}
              onClick={handleToggleDropDown}
            />
            <DropDown className="DropDownUser" isOpen={isDropDownOpen}>
              <ul className={styles.AvatarDropDown_Menu}>
                <li
                  className={styles.AvatarDropDown_MenuItem}
                  onClick={handleLogout}
                >
                  <Icon
                    className={styles.AvatarDropDown_MenuItemIcon}
                    type="Exit"
                  />
                  <div className={styles.AvatarDropDown_MenuItemText}>
                    Выйти
                  </div>
                </li>
              </ul>
            </DropDown>
          </div>
        ) : (
          <Link href={ROUTES.LOGIN}>
            <a className={styles.IconLink}>
              <Icon className={styles.Icon} type="User" />
              <div className={styles.IconDescription}>Войти</div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
