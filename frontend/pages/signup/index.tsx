import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Layout } from "components";

interface ISignupData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  re_password: string;
}

export default function SignupPage(): JSX.Element {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [formData, setFormData] = useState<ISignupData>({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    re_password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { first_name, last_name, phone_number, email, password, re_password } =
    formData;
  const myState = useTypedSelector(state => state);
  const isAuthenticated = useTypedSelector(
    state => state.account.isAuthenticated
  );
  console.log("[signup][myState]", myState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === re_password) {
      dispatch(
        signup(
          first_name,
          last_name,
          phone_number,
          email,
          password,
          re_password
        )
      );
      setIsAccountCreated(true);
    }
  };

  useEffect(() => {
    // if (isAuthenticated) {
    //   router.push("/");
    // }
    // if (isAccountCreated) {
    //   router.push("/login");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isAccountCreated]);

  return (
    <Layout>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Имя"
            name="first_name"
            value={first_name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Фамилия"
            name="last_name"
            value={last_name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Номер телефона"
            name="phone_number"
            value={phone_number}
            required
            onChange={handleChange}
          />
        </div>
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
        <div>
          <input
            type="text"
            placeholder="Подтверждение пароля"
            name="re_password"
            value={re_password}
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div>
        <span>Есть аккаунт?</span>
        <Link href={"/login"}>
          <a>Зарегистрироваться</a>
        </Link>
      </div>
    </Layout>
  );
}
