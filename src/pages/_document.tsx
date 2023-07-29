import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src="/fontawesome/js/brands.js"></script>
        <script defer src="/fontawesome/js/solid.js"></script>
        <script defer src="/fontawesome/js/fontawesome.js"></script>
        <script
          defer
          data-domain="adrianbusse.xyz"
          src="http://web.ghettohippy.de/js/script.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
