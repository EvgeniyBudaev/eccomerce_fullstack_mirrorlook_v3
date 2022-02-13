export const changeToBackendBaseUrl = (url: string): string => {
  const addressWithoutDomainUrl = url.replace(/^.*\/\/[^\/]+/, "").substring(1);
  return "http://62.84.119.86/" + addressWithoutDomainUrl;
};