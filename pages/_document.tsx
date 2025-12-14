import { Html, Head, Main, NextScript } from "next/document";
import Header from "./api/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
      <Header />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
