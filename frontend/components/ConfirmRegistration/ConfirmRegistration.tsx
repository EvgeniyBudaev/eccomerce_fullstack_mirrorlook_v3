import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMounted } from "hooks/useMounted";
import { useTypedSelector } from "hooks/useTypedSelector";
import styles from "./ConfirmRegistration.module.scss";

export const ConfirmRegistration: React.FC = () => {
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
    <section className={styles.ConfirmRegistration}>
      <div className={styles.ConfirmRegistration_Info}>
        <div className={styles.ConfirmRegistration_Content}>
          <h2 className={styles.ConfirmRegistration_Title}>
            Подтверждение регистрации
          </h2>
          <p className={styles.ConfirmRegistration_Text}>
            На ваш email отправлено письмо для активации аккаунта. Пожалуйста,
            подтвердите ваш email.
          </p>
        </div>
      </div>
    </section>
  );
};
