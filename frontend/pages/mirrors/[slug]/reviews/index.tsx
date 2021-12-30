import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IFilterResponse } from "api/types";
import { IPaging } from "types/filter";
import { IReview } from "types/review";
import { Layout, Reviews } from "components";
import { backendBase } from "constants/paths";
import { AlertError } from "utils/alert";

interface IReviewsResponseProps {
  error?: string;
  entities: IReview[];
  paging: IPaging;
}

export default function MirrorReviewsPage(
  props: IReviewsResponseProps
): JSX.Element {
  const { entities, error } = props;

  if (error) {
    console.log(
      "Ошибка! (frontend/pages/mirrors/slug/reviews/index.tsx): ",
      error
    );
  }

  useEffect(() => {
    if (error) {
      AlertError("Не удалось получить отзывы!", error);
    }
  }, [error]);

  console.log("reviews: ", entities);

  return (
    <Layout>
      <AlertContainer />
      {entities && <Reviews />}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("[params]: ", params);
  const productId = params.slug;
  try {
    const { data: response } = await axios.get<IFilterResponse<IReview>>(
      `${backendBase}api/v1/reviews/?product_slug=${productId}`
    );
    console.log("response: ", response);
    const { entities, pageItemsCount, totalItemsCount } = response;
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
  } catch (error) {
    return {
      props: {
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
