const dev = process.env.NODE_ENV !== "production";
const browser = typeof window !== "undefined";

export const backendBase =
  !dev && !browser ? "http://backend:8000/" : process.env.NEXT_PUBLIC_DOMAIN;

// export const backendBase = "http://127.0.0.1:8000/";
