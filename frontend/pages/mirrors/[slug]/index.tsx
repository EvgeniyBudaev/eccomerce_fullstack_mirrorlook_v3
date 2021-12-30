import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { IMirror } from "types/mirror";
import { Layout } from "components";
import { MirrorCard } from "components/Catalog/Mirrors/MirrorCard";
import { backendBase } from "constants/paths";
import { AlertError } from "utils/alert";

interface IMirrorDetailProps {
  error?: string;
  mirrorResponse: IMirror;
}

export default function MirrorDetail(props: IMirrorDetailProps): JSX.Element {
  const { error, mirrorResponse } = props;

  if (error) {
    console.log("Ошибка! (frontend/pages/mirrors/slug/index.tsx): ", error);
  }

  useEffect(() => {
    if (error) {
      AlertError("Ошибка в карточки зеркала!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      <MirrorCard mirror={mirrorResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = params.slug;
  try {
    const { data: mirrorResponse } = await axios.get<IMirror>(
      `${backendBase}api/v1/products/${productSlug}`
    );
    return {
      props: { mirrorResponse },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
