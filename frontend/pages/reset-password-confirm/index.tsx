import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reset_password_confirm } from "ducks/account";
import { Layout } from "components";

interface IFormData {
  new_password: string;
  re_new_password: string;
}

export default function ResetPasswordConfirmPage(): JSX.Element {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const dispatch = useDispatch();
  const router = useRouter();
  // const uid = match.params.uid;
  // const token = match.params.token;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(reset_password_confirm(uid, token, new_password, re_new_password));
    setRequestSent(true);
  };

  return (
    <Layout>
      <h1>Потверждение сброса пароля</h1>
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
  );
}
