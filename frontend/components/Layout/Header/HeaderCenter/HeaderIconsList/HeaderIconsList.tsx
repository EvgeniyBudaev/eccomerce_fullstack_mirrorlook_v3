import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isNull } from "lodash";
import { Icon } from "ui-kit";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ICartState } from "ducks/cart";
import { IAccount } from "api/types/account";
import styles from "./HeaderIconsList.module.scss";

export const HeaderIconsList: React.FC = () => {
  const [cartId, setCartId] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const account = useTypedSelector(state => state.account);
  const cart = useTypedSelector(state => state.cart);

  const getAccount = (account: IAccount) => {
    return account;
  };

  const getCartId = (cart: ICartState) => {
    return String(cart.id);
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
    fetchCartId(cart);
  }, [cart]);

  return (
    <div className={styles.HeaderIconsList}>
      <div className={styles.HeaderIconListItem}>
        <Link href={"/login"}>
          <a>
            <Icon className={styles.Icon} type={"User"} />
            <div className={styles.IconDescription}>
              {isAuthenticated ? account.user.first_name : "Войти"}
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.HeaderIconListItem}>
        {!isNull(cartId) && (
          <div>
            <Link
              href={{
                pathname: `/cart/${cartId}`,
              }}
            >
              <a>
                <Icon className={styles.Icon} type={"Basket"} />
                <div className={styles.IconDescription}>Корзина</div>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
