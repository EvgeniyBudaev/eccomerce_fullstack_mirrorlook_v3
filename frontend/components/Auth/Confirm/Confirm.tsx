import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./Confirm.module.scss";

export interface IConfirmProps {
  content?: string;
  title?: string;
}

export const Confirm: React.FC<IConfirmProps> = ({ content, title }) => {
  const { hasMounted } = useMounted();
  const router = useRouter();
  const account = useTypedSelector(state => state.account);
  const { isAuthenticated } = hasMounted && account;

  useEffect(() => {
    if (isAuthenticated) {
      router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <section className={styles.Confirm}>
      <div className={styles.Confirm_Info}>
        <div className={styles.Confirm_Content}>
          <h2 className={styles.Confirm_Title}>{title}</h2>
          <p className={styles.Confirm_Text}>{content}</p>
        </div>
      </div>
    </section>
  );
};
