import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { fetchUserActivation } from "api/account";
import { ROUTES } from "constants/routes";
import { setLoading, unsetLoading } from "ducks/loading";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Button, Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import styles from "./Activate.module.scss";

export interface IActivateProps {
  className?: string;
}

export const Activate: React.FC<IActivateProps> = ({ className }) => {
  const [error, setError] = useState("");
  const loading = useTypedSelector(state => state.loading);
  const { isLoading } = loading;
  const dispatch = useDispatch();
  const router = useRouter();
  const token = router.query.token as string;
  const uid = router.query.uid as string;

  useEffect(() => {
    if (error) {
      AlertError("Не удалось активировать пользователя!", error);
    }
  }, [error]);

  const fetchUserActivate = async (token: string, uid: string) => {
    setError("");
    dispatch(setLoading());
    try {
      const payload = {
        token,
        uid,
      };
      await fetchUserActivation(payload);
      router.push(ROUTES.LOGIN);
    } catch (error) {
      setError(error.message);
    } finally {
      dispatch(unsetLoading());
    }
  };

  const handleVerifyAccount = () => {
    void fetchUserActivate(token, uid);
  };

  if (isLoading) return <Spinner />;

  return (
    <section className={classNames(styles.Activate, className)}>
      <AlertContainer />
      <div className={styles.ActivateInner}>
        <h1 className={styles.ActivateTitle}>Потверждение регистрации</h1>
        <div className={styles.ActivateControl}>
          <Button onClick={handleVerifyAccount}>Подтвердить</Button>
        </div>
      </div>
    </section>
  );
};
