import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios, { AxiosError } from "axios";
import { HeadApplication, Layout } from "components";
import ReviewsAdd from "components/Reviews/ReviewsAdd";
import { backendBase } from "constants/paths";
import { IError } from "types/error";
import { IMirror } from "types/mirror";
import { AlertError } from "utils/alert";
import { getErrorByStatus } from "utils/error";

interface IMirrorReviewsAddPageProps {
  error?: IError;
  product: IMirror;
}

export default function MirrorReviewsAddPage({
  error,
  product,
}: IMirrorReviewsAddPageProps): JSX.Element {
  if (error) {
    console.error(
      "Ошибка! (frontend/pages/mirrors/slug/reviews/add/index.tsx): ",
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
        content="Добавить отзыв | Интернет-магазин зеркал MirrorLook"
        title="Добавить отзыв | MirrorLook"
      />
      <Layout>
        <AlertContainer />
        {product && <ReviewsAdd product={product} />}
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = params.slug;
  try {
    const url = encodeURI(`${backendBase}api/v1/products/${productSlug}`);
    const { data: response } = await axios.get<IMirror>(url);

    return {
      props: {
        product: response,
      },
    };
  } catch (e) {
    const error = e as AxiosError;
    const errorByStatus = getErrorByStatus(error);
    return {
      props: {
        product: null,
        error: errorByStatus,
      },
    };
  }
};
