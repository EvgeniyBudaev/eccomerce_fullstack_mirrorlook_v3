import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios, { AxiosError } from "axios";
import { IFilterResponse } from "api/types";
import { HeadApplication, Layout } from "components";
import { Products } from "components/Catalog";
import { CatalogNames } from "constants/names";
import { backendBase } from "constants/paths";
import { IError } from "types/error";
import { IFilter, IPaging } from "types/filter";
import { IMirror } from "types/mirror";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";

interface IMirrorsProps {
  catalogName: string;
  entities: IMirror[];
  error?: IError;
  paging: IPaging;
}

export default function MirrorsPage(props: IMirrorsProps): JSX.Element {
  const { error } = props;
  if (error) {
    console.error(
      "Ошибка! (frontend/pages/mirrors/index.tsx): ",
      error.error.message
    );
  }

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  return (
    <>
      <HeadApplication
        content="Каталог зеркал | Интернет-магазин зеркал MirrorLook"
        title="Каталог зеркал | MirrorLook"
      />
      <Layout>
        <AlertContainer />
        <Products productsResponse={props} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirror>> = async ({
  query: {
    page = 1,
    inStock = "",
    category = "",
    form = "",
    frame_color = "",
    ordering = "",
  },
}) => {
  inStock = inStock ? "count_in_stock_min=1&count_in_stock_max=50000" : "";
  const url = encodeURI(
    `${backendBase}api/v1/products/?catalog_slug=mirrors&${inStock}&category=${category}&form=${form}&frame_color=${frame_color}&ordering=${ordering}&page=${page}`
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
  } catch (e) {
    const error = e as AxiosError;
    const errorByStatus = getErrorByStatus(error);
    return {
      props: {
        catalogName: CatalogNames.MIRRORS,
        entities: [],
        error: errorByStatus,
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
