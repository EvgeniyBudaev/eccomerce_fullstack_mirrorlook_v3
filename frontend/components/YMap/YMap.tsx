import React, { useState } from "react";
import { YMaps } from "react-yandex-maps";
import { isNull } from "lodash";
import { useTypedSelector } from "hooks/useTypedSelector";
import Shipping from "../Shipping";
import { emptyMapSearchState } from "./GeoSearch";
import { PickMapState } from "./PickMap";

export interface IYMapProps {
  onSearchAddress?: (addressYMap: string) => void;
  children?: React.ReactNode;
}

export const YMap: React.FC<IYMapProps> = () => {
  const order = useTypedSelector(state => state.order);
  const query = !isNull(order.shipping_address)
    ? order.shipping_address.address
    : "Москва, Россия";
  const [searchState, setSearchState] = useState({
    ...emptyMapSearchState(),
    value: query,
  });
  const [mapState, setMapState] = useState<PickMapState>(query);

  return (
    <YMaps
      query={{
        apikey: "5a50ba23-ce9a-45cd-be41-849e6f0c3f1e",
        lang: "ru_RU",
        mode: "release",
      }}
    >
      <Shipping
        searchState={searchState}
        setSearchState={setSearchState}
        mapState={mapState}
        setMapState={setMapState}
      />
    </YMaps>
  );
};
