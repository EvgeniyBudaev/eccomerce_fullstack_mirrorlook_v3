import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPropsContext, GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Layout, LayoutMirrors } from "components";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  return (
    <Layout>
      <LayoutMirrors mirrorsResponse={mirrorsResponse} />
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps<IFilter<IMirror>> = async ({
//   params,
// }: GetStaticPropsContext<ParsedUrlQuery>) => {
//   console.log("[CONTEXT]", params);
//   const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
//     `http://localhost:8000/api/catalog/mirrors`
//   );
//   const { entities, paging } = mirrorsResponse;
//
//   return {
//     props: {
//       entities,
//       paging,
//     },
//     revalidate: 10,
//   };
// };

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: { value = "", page = 1 },
}) => {
  console.log("[Value]", value);
  const { data: mirrorsResponse } = await axios.get<IFilter<IMirror>>(
    `http://localhost:8000/api/catalog/mirrors?value=${value}&page=${page}`
  );
  const { entities, paging } = mirrorsResponse;

  return {
    props: {
      entities,
      paging,
    },
  };
};
