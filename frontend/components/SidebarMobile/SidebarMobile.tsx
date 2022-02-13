import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { ROUTES } from "constants/routes";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Avatar, Icon } from "ui-kit";
import styles from "./SidebarMobile.module.scss";

export const SidebarMobile: React.FC = () => {
  const { hasMounted } = useMounted();
  const account = useTypedSelector(state => state.account);
  const { isAuthenticated } = hasMounted && account;

  return (
    <div className={styles.SidebarMobile}>
      <ul className={styles.SidebarMobileList}>
        <li className={styles.SidebarMobileListItem}>
          <Link href={"/"}>
            <a className={styles.SidebarMobileLink}>
              {isAuthenticated ? (
                <>
                  <Avatar
                    className={styles.SidebarMobileAvatar}
                    classNameSmallCircle={styles.SidebarMobileAvatarSmallCircle}
                    size={32}
                    title={account.user.first_name[0]}
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
                  <Icon type={"User"} />
                  <div className={styles.SidebarMobileLinkText}>
                    <div className={styles.SidebarMobileLinkTitle}>Гость</div>
                    <div className={styles.SidebarMobileLinkSubTitle}>
                      Регистрация
                    </div>
                  </div>
                </>
              )}
            </a>
          </Link>
        </li>
        <li className={styles.SidebarMobileListItem}>
          <Link href={ROUTES.MIRRORS}>
            <a className={styles.SidebarMobileLink}>
              <Icon type="Mirror" />
              <div className={styles.SidebarMobileLinkText}>
                <div className={styles.SidebarMobileLinkTitle}>Зеркала</div>
              </div>
            </a>
          </Link>
        </li>
        <li className={styles.SidebarMobileListItem}>
          <Link href={ROUTES.CONSOLES}>
            <a className={styles.SidebarMobileLink}>
              <Icon type="Console" />
              <div className={styles.SidebarMobileLinkText}>
                <div className={styles.SidebarMobileLinkTitle}>Консоли</div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
