const dev = process.env.NODE_ENV !== "production";
const browser = typeof window !== "undefined";

export const backendBase =
  !dev && !browser ? "http://62.84.119.86/" : process.env.NEXT_PUBLIC_DOMAIN;

// export const backendBase = "http://127.0.0.1:8000/";

// export const backendBase = "http://backend:8000/";
