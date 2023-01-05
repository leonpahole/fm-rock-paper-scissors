import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
const getInitialState = () => {
  if (typeof window === "undefined") {
    return true;
  }

  return !window.matchMedia(QUERY).matches;
};

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    getInitialState()
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    setPrefersReducedMotion(getInitialState());

    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: { matches?: boolean }) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  console.log("p", prefersReducedMotion);
  return prefersReducedMotion;
};
