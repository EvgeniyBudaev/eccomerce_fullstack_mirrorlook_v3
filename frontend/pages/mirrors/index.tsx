import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Layout } from "components";
import { Products } from "components/Catalog";
import { Error404 } from "components/Error";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { IFilterResponse } from "api/types";
import { CatalogNames } from "constants/names";

interface IMirrorsProps {
  catalogName: string;
  entities: IMirror[];
  paging: IPaging;
}

export default function MirrorsPage(
  mirrorsResponse: IMirrorsProps
): JSX.Element {
  if (!mirrorsResponse) {
    return <Error404 />;
  }

  return (
    <Layout>
      <Products productsResponse={mirrorsResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: {
    page = 1,
    category = "",
    form = "",
    frame_color = "",
    ordering = "",
  },
}) => {
  const baseUrl = "http://62.84.119.86/";
  const url = encodeURI(
    `api/v1/products/?catalog_slug=mirrors&category=${category}&form=${form}&frame_color=${frame_color}&ordering=${ordering}&page=${page}`
  );
  try {
    const { data: mirrorsResponse } = await axios.get<IFilterResponse<IMirror>>(
      url
    );
    const { entities, pageItemsCount, totalItemsCount } = mirrorsResponse;
    const pagesCount = Math.max(Math.ceil(totalItemsCount / pageItemsCount), 1);

    return {
      props: {
        catalogName: entities[0] ? entities[0].catalog : CatalogNames.MIRRORS,
        entities: entities,
        paging: {
          pageItemsCount: pageItemsCount,
          pageNumber: 1,
          pagesCount: pagesCount,
          totalItemsCount: totalItemsCount,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        catalogName: CatalogNames.MIRRORS,
        entities: [],
        paging: {
          pageItemsCount: 0,
          pageNumber: 1,
          pagesCount: 1,
          totalItemsCount: 0,
        },
      },
    };
  }
};
