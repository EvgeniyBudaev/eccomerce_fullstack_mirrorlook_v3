import { useState, useEffect, useCallback, useMemo } from "react";
import * as _ from "lodash";
import { YandexGeocodingService } from "./scripts/geo/YandexGeocodingService";
import { GeocodingService } from "./scripts/geo/geo";
import { HereGeocodingService } from "./scripts/geo/HereGeocodingService";

const CITY_CENTER = [55.75, 37.57];
const CITY_NAME = "Москва";
const REGION_PREFIX = "Россия, Москва";

export const useDataYMap = (ymaps: any) => {
  const [inputValue, setInputValue] = useState(CITY_NAME);
  const [pinValue, setPinValue] = useState(CITY_NAME);
  const [variants, setVariants] = useState([]);
  const [coords, setCoords] = useState(CITY_CENTER);

  const geocoder: GeocodingService = useMemo(() => {
    // return new YandexGeocodingService().configure(ymaps)
    return new HereGeocodingService().configure();
  }, []);

  const fetchVariants = useCallback(
    _.debounce(async (v: string) => {
      if (v) {
        const suggest = await geocoder.suggest(REGION_PREFIX + ", " + v);
        setVariants(suggest);
      }
    }, 150),
    []
  );

  const handleVariantChange = useCallback((variant: any) => {
    const address = removePrefixFromValue(variant.value);
    setInputValue(address);
    setPinValue(address);
    setVariants([]);

    geocoder.getCoordsFromAddress(variant.value).then((coords: number[]) => {
      setCoords(coords);
    });
  }, []);

  const handleInput = useCallback((value: string) => {
    setInputValue(value);
    fetchVariants(value);
  }, []);

  const onMapMove = useCallback(
    _.debounce((e: any) => {
      const center = e.originalEvent.map.getCenter();
      if (isCoordsEqual(center, coords)) {
        return;
      }

      setCoords(center);

      geocoder.getAddressFromCoords(center).then((address: string) => {
        address = removePrefixFromValue(address);
        setInputValue(address);
        setPinValue(address);
      });
    }, 250),
    [coords]
  );

  return {
    inputValue,
    variants,
    coords,
    handleVariantChange,
    handleInput,
    pinValue,
    onMapMove,
  };
};

const removePrefixFromValue = (value: string) => {
  return value.replace(REGION_PREFIX + ", ", "").trim();
};

const isCoordsEqual = (
  firstCoords: number[],
  secondCoords: number[],
  scale = 8
) => {
  return (
    firstCoords[0].toFixed(scale) + "," + firstCoords[1].toFixed(scale) ===
    secondCoords[0].toFixed(scale) + "," + secondCoords[1].toFixed(scale)
  );
};
