import Link from "next/link";
import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import { Avatar, Icon } from "ui-kit";
import { ROUTES } from "constants/routes";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Sidebar.module.scss";

export interface ISidebarProps {
  className?: string;
  ref: ForwardedRef<HTMLDivElement>;
}

export const Sidebar = forwardRef(
  (
    { className }: ISidebarProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const { hasMounted } = useMounted();
    const account = useTypedSelector(state => state.account);
    const { isAuthenticated } = hasMounted && account;

    return (
      <div className={classNames(styles.Sidebar, className)} ref={ref}>
        <ul className={styles.SidebarList}>
          <li className={styles.SidebarListItem}>
            <Link href={"/"}>
              <a className={styles.SidebarLink}>
                {isAuthenticated ? (
                  <>
                    <Avatar
                      className={styles.SidebarAvatar}
                      classNameSmallCircle={styles.SidebarAvatarSmallCircle}
                      size={32}
                      title={account.user.first_name[0]}
                    />
                    <div className={styles.SidebarLinkText}>
                      <div
                        className={classNames(
                          styles.SidebarLinkTitle,
                          styles.UserName
                        )}
                      >
                        {account.user.first_name} {account.user.last_name[0]}.
                      </div>
                      <div className={styles.SidebarLinkSubTitle}>
                        {account.user.email}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Icon type={"User"} />
                    <div className={styles.SidebarLinkText}>
                      <div className={styles.SidebarLinkTitle}>Гость</div>
                      <div className={styles.SidebarLinkSubTitle}>
                        Регистрация
                      </div>
                    </div>
                  </>
                )}
              </a>
            </Link>
          </li>
          <li className={styles.SidebarListItem}>
            <Link href={ROUTES.MIRRORS}>
              <a className={styles.SidebarLink}>
                <Icon type="Mirror" />
                <div className={styles.SidebarLinkText}>
                  <div className={styles.SidebarLinkTitle}>Зеркала</div>
                </div>
              </a>
            </Link>
          </li>
          <li className={styles.SidebarListItem}>
            <Link href={ROUTES.CONSOLES}>
              <a className={styles.SidebarLink}>
                <Icon type="Console" />
                <div className={styles.SidebarLinkText}>
                  <div className={styles.SidebarLinkTitle}>Консоли</div>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
