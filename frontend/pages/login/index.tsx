import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Layout } from "components";

interface ILoginData {
  email: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { email, password } = formData;
  const myState = useTypedSelector(state => state);
  const isAuthenticated = useTypedSelector(
    state => state.account.isAuthenticated
  );
  console.log("[login][myState]", myState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Layout>
      <h1>Авторизация</h1>
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
        <div>
          <input
            type="text"
            placeholder="Пароль"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      <div>
        <span>Нет аккаунта?</span>
        <Link href={"/signup"}>
          <a>Зарегистрироваться</a>
        </Link>
      </div>
      <div>
        <span>Забыли пароль?</span>
        <Link href={"/reset-password"}>
          <a>Восстановление пароля</a>
        </Link>
      </div>
    </Layout>
  );
}
