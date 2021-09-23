import { YMapsApi } from "react-yandex-maps";
import { GeocodingService } from "./geo";

export class YandexGeocodingService implements GeocodingService {
  private ymaps: YMapsApi;

  static getDefaultQuery() {
    return {
      apikey: process.env.NEXT_PUBLIC_MAP_API_KEY,
      lang: "ru_RU",
      load: "",
      ns: "",
    };
  }

  configure(ymaps: YMapsApi) {
    this.ymaps = ymaps;
    return this;
  }

  async suggest(query: string) {
    const res = await this.ymaps.suggest(query);
    return res.map(item => ({ value: item.value, label: item.displayName }));
  }

  async getAddressFromCoords(coords: number[]) {
    const geocodeRes = await this.ymaps.geocode(coords, {
      kind: "house",
      results: 1,
    });
    const houseRes = geocodeRes.geoObjects.get(0);
    return houseRes.getAddressLine();
  }

  async getCoordsFromAddress(address: string) {
    const geocodeRes = await this.ymaps.geocode(address, { results: 1 });
    return geocodeRes.geoObjects.get(0).geometry.getCoordinates();
  }
}
