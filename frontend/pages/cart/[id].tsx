import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Cart, Layout } from "components";
import { IFetchItemToCartResponse } from "api/types/cart";

interface ICartDetailsProps {
  entities: IFetchItemToCartResponse[];
}

export default function CartDetailsPage(): JSX.Element {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ICartDetailsProps> =
  async ({ params }) => {
    const cartId = params.id;
    const url = encodeURI(`api/v1/cart-products/?cart=${cartId}`);
    try {
      const { data } = await axios.get<IFetchItemToCartResponse[]>(url);
      return {
        props: { entities: data },
      };
    } catch (error) {
      return {
        props: { entities: [] },
      };
    }
  };
