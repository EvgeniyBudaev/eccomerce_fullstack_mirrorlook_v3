import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios, { AxiosError } from "axios";
import { IFetchItemToCartResponse } from "api/types/cart";
import { Cart, Layout } from "components";
import { backendBase } from "constants/paths";
import { IError } from "types/error";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";

interface ICartDetailsProps {
  entities: IFetchItemToCartResponse[];
  error?: IError;
}

export default function CartDetailsPage(props: ICartDetailsProps): JSX.Element {
  const { error } = props;

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Корзина | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:title"
          content="Корзина | Интернет-магазин зеркал MirrorLook"
        />
        <meta
          property="og:description"
          content="Корзина | Интернет-магазин зеркал MirrorLook"
        />
        <title>Корзина | MirrorLook</title>
      </Head>
      <Layout>
        <AlertContainer />
        <Cart />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  ICartDetailsProps
> = async ({ params }) => {
  const cartId = params.id;
  const url = encodeURI(`${backendBase}api/v1/cart-products/?cart=${cartId}`);
  try {
    const { data } = await axios.get<IFetchItemToCartResponse[]>(url);
    return {
      props: { entities: data },
    };
  } catch (e) {
    const error = e as AxiosError;
    const errorByStatus = getErrorByStatus(error);
    return {
      props: {
        entities: [],
        error: errorByStatus,
      },
    };
  }
};
