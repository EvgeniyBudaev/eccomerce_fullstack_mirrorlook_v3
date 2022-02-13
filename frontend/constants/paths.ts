const dev = process.env.NODE_ENV !== "production";
const browser = typeof window !== "undefined";

export const backendBase =
  !dev && !browser ? "http://backend:8000/" : process.env.NEXT_PUBLIC_DOMAIN;
// dev: "http://127.0.0.1:8000/"
// prod: "http://backend:8000/"
// export const backendBase = "http://backend:8000/";
