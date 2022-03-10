import { useEffect, useRef } from "react";

export const useKey = (key: any, cb: any): void => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        if (callbackRef.current) {
          callbackRef.current(event);
        }
      }
    }
    document.addEventListener("keypress", handle);
    // document.addEventListener("keydown", handle);
    // document.addEventListener("keyup", handle);
    return () => {
      document.removeEventListener("keypress", handle);
      // document.removeEventListener("keydown", handle);
      // document.removeEventListener("keyup", handle);
    };
  }, [key]);
};
