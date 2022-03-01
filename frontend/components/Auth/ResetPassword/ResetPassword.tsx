import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer as AlertContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Layout } from "components";
import { ActionTypes } from "ducks/account";
import styles from "./ResetPassword.module.scss";

interface IFormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Укажите Email")
    .email("Неверный email. Проверьте, правильно ли введён email"),
});

export const ResetPassword: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState<IFormData>({ email: "" });
  const { email } = formData;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: ActionTypes.FETCH_PASSWORD_RESET,
      payload: email,
    });
    setRequestSent(true);
  };

  return (
    <>
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
    </>
  );
}