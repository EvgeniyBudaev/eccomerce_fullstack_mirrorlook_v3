import Link from "next/link";
//import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "ducks/account";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Layout } from "components";
import { Signup } from "components/Auth";

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
  //const router = useRouter();
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
      <Signup />
    </Layout>
  );
}
