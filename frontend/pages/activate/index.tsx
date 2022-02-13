import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { verify } from "ducks/account";
import { Layout } from "components";

export default function ActivatePage(): JSX.Element {
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleVerifyAccount = () => {
    const uid = router.asPath.split("/")[2];
    const token = router.asPath.split("/")[3];
    dispatch(verify(uid, token));
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
