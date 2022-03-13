import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import classNames from "classnames";
import { ROUTES } from "constants/routes";
import { ActionTypes } from "ducks/account";
import { accountSelector } from "ducks/selectors";
import { useMounted } from "hooks/useMounted";
import { useDispatch, useSelector } from "hooks";
import { Avatar, Icon } from "ui-kit";
import styles from "./SidebarMobile.module.scss";

export interface ISidebarMobileProps {
  onClose?: () => void;
}

export const SidebarMobile: React.FC<ISidebarMobileProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { hasMounted } = useMounted();
  const account = useSelector(accountSelector);
  const { isAuthenticated } = hasMounted && account;

  const handleLogout = () => {
    dispatch({
      type: ActionTypes.FETCH_LOGOUT,
    });
    router.push(ROUTES.HOME);
  };

  const handleAvatarClick = () => {
    if (isAuthenticated) {
      if (router.pathname === ROUTES.HOME) {
        onClose();
      } else {
        router.push(ROUTES.HOME);
      }
    } else {
      if (router.pathname === ROUTES.LOGIN) {
        onClose();
      } else {
        router.push(ROUTES.LOGIN);
      }
    }
  };

  const handleProductClick = () => {
    if (router.pathname === "/mirrors") {
      onClose();
    } else {
      router.push(ROUTES.MIRRORS_DEFAULT);
    }
  };

  return (
    <div className={styles.SidebarMobile}>
      <ul className={styles.SidebarMobileList}>
        <li className={styles.SidebarMobileListItem}>
          <div className={styles.SidebarMobileLink} onClick={handleAvatarClick}>
            {isAuthenticated ? (
              <>
                <Avatar
                  className={styles.SidebarMobileAvatar}
                  size={32}
                  user={
                    isAuthenticated && account.user
                      ? account.user.first_name
                      : null
                  }
                />
                <div className={styles.SidebarMobileLinkText}>
                  <div
                    className={classNames(
                      styles.SidebarMobileLinkTitle,
                      styles.UserName
                    )}
                  >
                    {account.user.first_name} {account.user.last_name[0]}.
                  </div>
                  <div className={styles.SidebarMobileLinkSubTitle}>
                    {account.user.email}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Icon type="User" />
                <div className={styles.SidebarMobileLinkText}>
                  <div className={styles.SidebarMobileLinkTitle}>Гость</div>
                  <div className={styles.SidebarMobileLinkSubTitle}>
                    Регистрация / Войти
                  </div>
                </div>
              </>
            )}
          </div>
        </li>
        <li className={styles.SidebarMobileListItem}>
          <div
            className={styles.SidebarMobileLink}
            onClick={handleProductClick}
          >
            <Icon type="Mirror" />
            <div className={styles.SidebarMobileLinkText}>
              <div className={styles.SidebarMobileLinkTitle}>Зеркала</div>
            </div>
          </div>
        </li>
        {isAuthenticated && (
          <li className={styles.SidebarMobileListItem} onClick={handleLogout}>
            <div className={styles.SidebarMobileLink}>
              <Icon type="Exit" />
              <div className={styles.SidebarMobileLinkText}>
                <div className={styles.SidebarMobileLinkTitle}>Выйти</div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};
