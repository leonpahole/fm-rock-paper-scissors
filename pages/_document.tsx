import { Html, Head, Main, NextScript } from "next/document";
import Modal from "react-modal";

Modal.setAppElement("#modals");

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <main>
          <Main />
          <div id="modals" />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
