import axios, { AxiosInstance } from "axios";
import { expecta } from "../lib/expecta";
import { GeocodingService } from "./geo";
import {
  THereMethodName,
  THereAddressLevel,
  THereAddressToDisplay,
  THereAddressDisplayLevel,
} from "./geo-here";
import { GeocoderResponseInvalidError } from "./errors/GeocoderResponseInvalidError";

export class HereGeocodingService implements GeocodingService {
  private axios: AxiosInstance;

  configure() {
    this.axios = axios.create({
      baseURL: "https://geocoder.api.here.com/6.2/",
      params: {
        app_id: "1EUjlTer2ThhIs7fyZNJ",
        app_code: "ZNgitE19cMxPCTQRDyIJsQ",
        language: "ru-RU",
      },
    });

    return this;
  }

  async suggest(query: string) {
    const res = await this.makeGetRequest("suggest", {
      query,
      country: "RUS",
      maxresults: "10",
    });

    console.log("SUGGEST RES", res);

    return this.deleteSuggestedDublicates(res.suggestions).map((item: any) => {
      const address = this.getStringFromAddress(item.address, undefined, true);
      return { value: address, label: address };
    });
  }

  /**
   * @todo решить проблемную ситуацию, когда нужно выбрать дом из СНТ, которого нет на карте
   * @see https://developer.here.com/documentation/geocoder/topics/resource-reverse-geocode.html
   */
  async getAddressFromCoords(coords: number[]) {
    const geocodeRes = await this.makeGetRequest("reversegeocode", {
      mode: "retrieveAddresses",
      addressattributes: "houseNumber",
      prox: this.transformCoordsToHere(coords),
    });

    const results = geocodeRes.Response.View[0].Result;

    console.log("REVERSE GEOCODE RES", results, coords);

    let firstHouseIndex: string = undefined;
    let firstStreetIndex: string = undefined;
    let firstDistrictIndex: string = undefined;

    for (const i in results) {
      if (
        typeof firstStreetIndex === "undefined" &&
        (results[i].MatchLevel as THereAddressLevel) === "street"
      ) {
        firstStreetIndex = i;
        continue;
      } else if (
        typeof firstHouseIndex === "undefined" &&
        (results[i].MatchLevel as THereAddressLevel) === "district"
      ) {
        firstDistrictIndex = i;
        continue;
      } else if (
        typeof firstHouseIndex === "undefined" &&
        (results[i].MatchLevel as THereAddressLevel) === "houseNumber"
      ) {
        firstHouseIndex = i;
        break;
      }
    }

    if (firstHouseIndex) {
      return this.getAddressStringFromGeocodeRes(
        results[firstHouseIndex],
        true
      );
    } else if (firstStreetIndex) {
      return this.getAddressStringFromGeocodeRes(
        results[firstStreetIndex],
        true
      );
    } else if (firstDistrictIndex) {
      return this.getAddressStringFromGeocodeRes(
        results[firstStreetIndex],
        true
      );
    } else {
      throw new GeocoderResponseInvalidError();
    }
  }

  async getCoordsFromAddress(address: string) {
    const geocodeRes = await this.makeGetRequest("geocode", {
      maxresults: 1,
      country: "RUS",
      searchtext: address,
    });

    console.log("GEOCODE RES", geocodeRes.Response.View[0].Result[0]);

    return this.transformCoordsFromHere(
      geocodeRes.Response.View[0].Result[0].Location.DisplayPosition
    );
  }

  private async makeGetRequest(
    methodName: THereMethodName,
    queryParams: any = {}
  ) {
    const params = Object.assign(
      {
        app_id: "1EUjlTer2ThhIs7fyZNJ",
        app_code: "ZNgitE19cMxPCTQRDyIJsQ",
        language: "ru-RU",
      },
      queryParams
    );

    const geocodeRes = await this.axios.get(this.getUrlFor(methodName), {
      params,
    });
    return geocodeRes.data;
  }

  private getUrlFor(method: THereMethodName) {
    switch (method) {
      case "reversegeocode":
        return "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json";
      case "suggest":
        return "https://autocomplete.geocoder.api.here.com/6.2/suggest.json";
      default:
        return "https://geocoder.api.here.com/6.2/geocode.json";
    }
  }

  private getAddressStringFromGeocodeRes(res: any, withoutCounty?: boolean) {
    expecta(
      res.Location.Address.Country === "RUS" ||
        res.Location.Address.Country === "Россия"
    ).toBeTrue(() => new GeocoderResponseInvalidError());

    return this.getStringFromAddress(
      {
        country: "Россия",
        county: res.Location.Address.County,
        city: res.Location.Address.City,
        street: res.Location.Address.Street,
        district: res.Location.Address.District,
        houseNumber: res.Location.Address.HouseNumber,
      },
      undefined,
      withoutCounty
    );
  }

  private getStringFromAddress(
    address: THereAddressToDisplay,
    displayLevel?: THereAddressDisplayLevel,
    withoutCounty?: boolean
  ) {
    if (!displayLevel) {
      if (address.houseNumber) {
        displayLevel = "houseNumber";
      } else if (address.street) {
        displayLevel = "street";
      } else if (address.district) {
        displayLevel = "district";
      } else {
        displayLevel = "city";
      }
    }

    let base = withoutCounty
      ? address.city
      : `${address.country}, ${address.county}, ${address.city}`;
    if (
      address.district &&
      (displayLevel === "district" || !address.district.includes("район"))
    ) {
      base += `, ${address.district}`;
    }

    switch (displayLevel) {
      case "houseNumber":
        return base + `, ${address.street}, ${address.houseNumber}`;
      case "street":
        return base + `, ${address.street}`;
      case "district":
        return base;
      default:
        return base;
    }
  }

  private deleteSuggestedDublicates(suggestedItems: any[]) {
    const existed: any = {};
    return suggestedItems.filter(({ matchLevel, address }) => {
      const key =
        matchLevel +
        "|" +
        address.country +
        "|" +
        address.state +
        "|" +
        address.state +
        "|" +
        address.city +
        "|" +
        address.street +
        "|" +
        address.houseNumber;

      if (existed[key]) {
        return false;
      } else {
        existed[key] = true;
        return true;
      }
    });
  }

  private transformCoordsToHere(coords: number[]) {
    return (
      (coords[0] + 0.0001).toFixed(6) + "," + (coords[1] + 0.0004).toFixed(6)
    );
  }

  private transformCoordsFromHere(coordsResult: {
    Latitude: number;
    Longitude: number;
  }) {
    return [coordsResult.Latitude - 0.0001, coordsResult.Longitude - 0.0004];
  }
}
