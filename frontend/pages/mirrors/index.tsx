import { ParsedUrlQuery } from "querystring";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetServerSideProps,
} from "next";
import React from "react";
import axios from "axios";
import { Layout, LayoutMirrors } from "components";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { IFilterResponse } from "api/types";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function MirrorsPage(
  mirrorsResponse: IMirrorsProps
): JSX.Element {
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
  query: { page = 1, category = "", form = "" },
}) => {
  console.log("[PAGE]", page);
  console.log("[category]", category);
  console.log("[form]", form);
  const url = encodeURI(
    `http://127.0.0.1:8000/api/v1/mirrors/?category=${category}&form=${form}&page=${page}`
  );

  const { data: mirrorsResponse } = await axios.get<IFilterResponse<IMirror>>(
    url
  );

  const { entities, pageItemsCount, totalItemsCount } = mirrorsResponse;
  const pagesCount = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);

  return {
    props: {
      entities: entities,
      paging: {
        pageItemsCount: pageItemsCount,
        pageNumber: 1,
        pagesCount: pagesCount,
        totalItemsCount: totalItemsCount,
      },
    },
  };
};
