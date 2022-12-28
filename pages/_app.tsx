import "../styles/index.scss";
import type { AppProps } from "next/app";
import { barlowSemiCondensedFont } from "../utils/font-family.utils";
import { Breakpoints } from "../utils/breakpoints";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          html {
            --barlow-semi-condensed-font: ${barlowSemiCondensedFont.style
              .fontFamily};

            --breakpoint-sm: ${Breakpoints.sm};
            --breakpoint-md: ${Breakpoints.md};
            --breakpoint-lg: ${Breakpoints.lg};
            --breakpoint-xl: ${Breakpoints.xl};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
