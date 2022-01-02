import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { Layout } from "components";
import ReviewsAdd from "components/Reviews/ReviewsAdd";
import { backendBase } from "constants/paths";
import { IMirror } from "types/mirror";
import { AlertError } from "utils/alert";

interface IMirrorReviewsAddPageProps {
  error?: string;
  product: IMirror;
}

export default function MirrorReviewsAddPage({
  error,
  product,
}: IMirrorReviewsAddPageProps): JSX.Element {
  if (error) {
    console.error(
      "Ошибка! (frontend/pages/mirrors/slug/reviews/add/index.tsx): ",
      error
    );
  }

  useEffect(() => {
    if (error) {
      AlertError("Не удалось получить id продукта!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      {product && <ReviewsAdd product={product} />}
    </Layout>
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
  } catch (error) {
    return {
      props: {
        product: null,
        error: error.message,
      },
    };
  }
};
