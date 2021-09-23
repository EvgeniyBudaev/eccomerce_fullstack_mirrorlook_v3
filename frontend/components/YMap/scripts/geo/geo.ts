export interface GeocodingService {
  suggest(query: string): Promise<Array<{ value: string; label: string }>>;
  getAddressFromCoords(coords: number[]): Promise<string>;
  getCoordsFromAddress(address: string): Promise<number[]>;
}

export type TAddress = {
  country: string;
  subject: string;
  region: string;
  municipal: string;
};
