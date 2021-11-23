import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { IMirror } from "types/mirror";
import { Layout } from "components";
import { MirrorCard } from "components/Catalog/Mirrors/MirrorCard";

interface IMirrorDetailProps {
  mirrorResponse: IMirror;
}

export default function MirrorDetail(props: IMirrorDetailProps): JSX.Element {
  return (
    <Layout>
      <MirrorCard mirror={props.mirrorResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = params.slug;
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  try {
    const { data: mirrorResponse } = await axios.get<IMirror>(
      `${baseUrl}api/v1/products/${productSlug}`
    );
    return {
      props: { mirrorResponse },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
