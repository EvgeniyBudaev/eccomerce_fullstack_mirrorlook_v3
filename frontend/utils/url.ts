import { backendBase } from "constants/paths";

export const changeToBackendBaseUrl = (url: string) => {
  const addressWithoutDomainUrl = url.replace(/^.*\/\/[^\/]+/, "").substring(1);
  return backendBase + addressWithoutDomainUrl;
};
