import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { Layout } from "components";
import { Products } from "components/Catalog";
import { IMirror } from "types/mirror";
import { IFilter, IPaging } from "types/filter";
import { IFilterResponse } from "api/types";
import { CatalogNames } from "constants/names";
import { AlertError } from "utils/alert";

interface IMirrorsProps {
  catalogName: string;
  entities: IMirror[];
  error?: string;
  paging: IPaging;
}

export default function MirrorsPage(
  mirrorsResponse: IMirrorsProps
): JSX.Element {
  const { error } = mirrorsResponse;
  if (error) {
    console.log("Ошибка! (frontend/pages/mirrors/index.tsx): ", error);
  }

  useEffect(() => {
    if (error) {
      AlertError("Ошибка на странице зеркал!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
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
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const url = encodeURI(
    `${baseUrl}api/v1/products/?catalog_slug=mirrors&category=${category}&form=${form}&frame_color=${frame_color}&ordering=${ordering}&page=${page}`
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
        error: error.message,
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
