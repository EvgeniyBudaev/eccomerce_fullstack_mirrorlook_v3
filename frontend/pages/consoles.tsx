import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Layout, LayoutMirrors } from "components";
import { IConsole, IConsoles } from "types/console";
import { IFilter, IPaging } from "types/filter";
// import { fetchConsoles } from "ducks/mirrors/actionCreator";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IConsolesProps {
  entities: IConsole[];
  paging: IPaging;
}

export default function Mirrors(consolesResponse: IConsolesProps): JSX.Element {
  const [consoles, setConsoles] = useState(consolesResponse.entities);
  const state = useTypedSelector(state => state);
  const dispatch = useDispatch();
  console.log("[consolesResponse]", consolesResponse);

  // useEffect(() => {
  //   dispatch(fetchConsoles(consoles));
  // }, [consolesResponse, dispatch]);

  return <Layout>Страница с консолями</Layout>;
}

export const getServerSideProps: GetServerSideProps<IFilter<IConsoles>> =
  async () => {
    const { data: mirrorsResponse } = await axios.get<IFilter<IConsoles>>(
      `http://localhost:8000/api/catalog/consoles/`
    );
    const { entities, paging } = mirrorsResponse;

    return {
      props: {
        entities,
        paging,
      },
    };
  };
