import { GetServerSideProps } from "next";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Layout, LayoutMirrors, MirrorsList } from "components";
import { Context } from "context/store";
import { IFilter, IMirror, IMirrors } from "types/mirror";
import { IPaging } from "../types/filter";

interface IMirrorsProps {
  entities: IMirror[];
  paging: IPaging;
}

export default function Mirrors(mirrorsResponse: IMirrorsProps): JSX.Element {
  console.log("[mirrorsResponse]", mirrorsResponse);
  const { state, dispatch } = useContext(Context);
  console.log("STATE", state);

  useEffect(() => {
    dispatch({
      type: "MIRRORS_REQUEST",
      payload: mirrorsResponse,
    });
  }, [dispatch, mirrorsResponse]);

  return (
    <Layout>
      <LayoutMirrors>
        <MirrorsList mirrors={mirrorsResponse.entities} />
      </LayoutMirrors>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IFilter<IMirrors>> =
  async () => {
    const { data: mirrorsResponse } = await axios.get<IFilter<IMirrors>>(
      `http://localhost:8000/api/catalog/mirrors/`
    );
    const { entities, paging } = mirrorsResponse;

    return {
      props: {
        entities,
        paging,
      },
    };
  };
