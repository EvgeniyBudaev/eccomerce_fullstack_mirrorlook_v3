import React, { useState, useCallback, useMemo, useEffect } from "react";
import * as ym from "react-yandex-maps";
import cn from "classnames";
import { useDataYMap } from "./useDataYMap";
import styles from "./YMap.module.scss";
import { Icon } from "../../ui-kit";
import {
  FullscreenControl,
  GeolocationControl,
  ZoomControl,
} from "react-yandex-maps";
import { MapInput } from "./MapInput/MapInput";

export interface IYMapProps {
  ymaps: ym.YMapsApi;
  onLoadSuggest: (ymaps: ym.YMapsApi) => void;
}

const YMap: React.FC<IYMapProps> = ({ ymaps, onLoadSuggest }) => {
  const dp = useDataYMap(ymaps);
  console.log("dp.inputValue", dp.inputValue);

  const handleLoadSuggest = (ymaps: ym.YMapsApi) => {
    //onLoadSuggest(ymaps);
    loadSuggest(ymaps);
  };

  const loadSuggest = (ymaps: ym.YMapsApi): void => {
    console.log("ymaps", ymaps);
    new ymaps.SuggestView("suggest");
  };

  return (
    <div>
      <div>
        <Icon
          className={cn(styles.YMapPoint, styles.YMapPointItem)}
          type="ArrowDown"
        />
        <p className={cn(styles.YMapPointText, styles.YMapPointItem)}>
          {dp.pinValue}
        </p>

        <ym.Map
          state={{ center: dp.coords, zoom: 16 }}
          width="100%"
          height={400}
          modules={["SuggestView"]}
          onLoad={handleLoadSuggest}
          onActiontick={dp.onMapMove}
        >
          <FullscreenControl options={{ float: "left" }} />
          <GeolocationControl options={{ float: "left" }} />
          <ZoomControl options={{ float: "left" }} />
        </ym.Map>
      </div>
      <MapInput
        id="suggest"
        inputValue={dp.inputValue}
        handleInput={dp.handleInput}
        handleChange={dp.handleVariantChange}
        items={dp.variants}
      />
    </div>
  );
};

export default ym.withYMaps(YMap, true, ["suggest", "geocode"]);
