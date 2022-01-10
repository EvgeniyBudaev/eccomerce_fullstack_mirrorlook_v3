import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "components";
import { reset_password_confirm } from "ducks/account";

interface IFormData {
  new_password: string;
  re_new_password: string;
}

export default function ResetPasswordConfirmPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const dispatch = useDispatch();
  const router = useRouter();
  const uid = router.asPath.split("/")[2];
  const token = router.asPath.split("/")[3];
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
    setRequestSent(true);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Подтверждение сброса пароля | Интернет-магазин зеркал MirrorLook"
        />
        <title>Подтверждение сброса пароля | MirrorLook</title>
      </Head>
      <Layout>
        <h1>Подтверждение сброса пароля</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Новый пароль"
              name="new_password"
              value={new_password}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Подтверждение нового пароля"
              name="re_new_password"
              value={re_new_password}
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Потверждение сброса пароля</button>
        </form>
      </Layout>
    </>
  );
}
