import Head from "next/head";
import React from "react";

export interface IHeadProps {
  content?: string;
  title?: string;
}

export const HeadApplication: React.FC<IHeadProps> = ({ content, title }) => {
  return (
    <Head>
      <meta name="description" content={content} />
      <meta property="og:title" content={content} />
      <meta property="og:description" content={content} />
      <title>{title}</title>
    </Head>
  );
};
