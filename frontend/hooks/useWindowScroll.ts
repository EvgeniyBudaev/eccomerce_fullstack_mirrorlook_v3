import { useState, useCallback, useRef, useEffect } from "react";

const useWindowScroll = ({ timerLength }) => {
  const [isOffset, setIsOffset] = useState(false);
  const timer = useRef(0);

  const handleScrollEvent = useCallback(() => {
    const offset = window.pageYOffset;
    setIsOffset(offset > 60);
  }, []);

  const handleScroll = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setTimeout(handleScrollEvent, timerLength);
  }, [handleScrollEvent, timerLength]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, timerLength]);

  return isOffset;
};

export default useWindowScroll;

// Вариант №2 с использованием lodash

// import {debounce} from 'lodash'
// const useWindowResize = () => {
//   console.log("useWindowResize");
//
//   const [isOffset, setIsOffset] = useState(false);
//
//
//   const handleScrollEvent = useCallback(() => {
//     const offset = window.pageYOffset;
//     let isNewOffset;
//     offset > 100 ? isNewOffset = true : isNewOffset = false
//     setIsOffset(isNewOffset);
//   }, []);
//
//   useEffect(() => {
//     window.addEventListener("scroll", debounce(handleScrollEvent, 100))
//   }, []);
//
//   return isOffset;
// };
//
// export default useWindowResize
