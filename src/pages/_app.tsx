import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Serif } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const roboto_serif = Roboto_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto_serif.className}>
      <Component {...pageProps} />
    </main>
  );
}
