export type THereMethodName = "geocode" | "reversegeocode" | "suggest";

export type THereAddressLevel =
  | "country" // Страна (в autocomplete), код страны (в reversegeocode)
  | "state" // Штат, федеральный округ
  | "county" // Область, республика, автономный округ
  | "city" // Город, район
  | "district" // Район города, название поселение или кооператива
  | "subdistrict" // Предпооложительно, микрорайон; получить его в ответе не вышло
  | "street" // Улица
  | "houseNumber" // Дом
  | "postalCode"; // Почтовый индекс

export type THereAddressToDisplay = {
  country: string;
  county: string;
  city: string;
  district?: string;
  street?: string;
  houseNumber?: string;
};

export type THereAddressDisplayLevel =
  | "street"
  | "houseNumber"
  | "district"
  | "city";
