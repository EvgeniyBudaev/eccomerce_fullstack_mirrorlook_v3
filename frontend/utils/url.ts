export const changeToBackendBaseUrl = (url: string): string => {
  const addressWithoutDomainUrl = url.replace(/^.*\/\/[^\/]+/, "").substring(1);
  return "http://backend:8000/" + addressWithoutDomainUrl;
};
