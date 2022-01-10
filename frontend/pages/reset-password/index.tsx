import Head from "next/head";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "components";
import { reset_password } from "ducks/account";

interface IFormData {
  email: string;
}

export default function ResetPasswordPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState<IFormData>({ email: "" });
  const { email } = formData;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(reset_password(email));
    setRequestSent(true);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Сброс пароля | Интернет-магазин зеркал MirrorLook"
        />
        <title>Сброс пароля | MirrorLook</title>
      </Head>
      <Layout>
        <h1>Сброс пароля</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Cбросить пароль</button>
        </form>
      </Layout>
    </>
  );
}
