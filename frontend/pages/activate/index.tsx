import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { verify } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Layout } from "components";

export default function ActivatePage(): JSX.Element {
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleVerifyAccount = () => {
    // const uid = match.params.uid;
    // const token = match.params.token;
    // dispatch(verify(uid, token));
    setIsVerified(true);
  };

  useEffect(() => {
    if (isVerified) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVerified]);

  return (
    <Layout>
      <h1>Потверждение регистрации</h1>
      <button onClick={handleVerifyAccount}>Подтвердить</button>
    </Layout>
  );
}
