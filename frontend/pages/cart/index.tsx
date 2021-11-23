import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Cart, Layout } from "components";
import { IFetchItemToCartResponse } from "api/types/cart";

interface ICartPageProps {
  entities: IFetchItemToCartResponse[];
}

export default function CartProductsPage(props: ICartPageProps): JSX.Element {
  console.log("[CartPage][props]", props);

  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ICartPageProps> =
  async () => {
    const baseUrl = "http://62.84.119.86/";
    const url = encodeURI(`api/v1/cart-products/`);

    try {
      const { data: cartResponse } = await axios.get<
        IFetchItemToCartResponse[]
      >(url);

      return {
        props: {
          entities: cartResponse,
        },
      };
    } catch (error) {
      return {
        props: {
          entities: [],
        },
      };
    }
  };
