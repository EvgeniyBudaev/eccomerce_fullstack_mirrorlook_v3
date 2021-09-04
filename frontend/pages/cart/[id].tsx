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

/* Вариант с getServerSideProps */
export const getServerSideProps: GetServerSideProps<ICartDetailsProps> =
  async ({ params }) => {
    const cartId = params.id;
    const url = encodeURI(
      `http://127.0.0.1:8000/api/v1/cart-products/?cart=${cartId}`
    );
    const { data } = await axios.get<IFetchItemToCartResponse[]>(url);

    return {
      props: { entities: data },
    };
  };

/* Вариант с getStaticProps */
// export const getStaticProps: GetStaticProps<ICartDetailsProps> =
//   async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
//     const cartId = params.id;
//     const url = encodeURI(
//       `http://127.0.0.1:8000/api/v1/cart-products/?cart=${cartId}`
//     );
//     const { data } = await axios.get<IFetchItemToCartResponse[]>(url);
//
//     if (!data) {
//       return { notFound: true };
//     }
//
//     return {
//       props: { entities: data },
//     };
//   };
//
// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await axios.get<IFetchItemToCartResponse[]>(
//     `http://localhost:8000/api/v1/cart-products/`
//   );
//
//   const cartIds = data.map(cart => cart.cart.toString());
//   const pathWithParams = cartIds.map(cartId => ({ params: { id: cartId } }));
//
//   return {
//     paths: pathWithParams,
//     fallback: "blocking",
//   };
// };
