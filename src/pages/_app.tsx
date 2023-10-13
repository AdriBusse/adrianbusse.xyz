import "@/styles/globals.css";
import {Analytics} from "@vercel/analytics/react";
import type {AppProps} from "next/app";
import {Roboto_Serif} from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import {NextUIProvider} from "@nextui-org/react";
import Header from "@/components/molecules/Header";
import SEO from "@/components/molecules/SEO";

config.autoAddCss = false;

const roboto_serif = Roboto_Serif({
    weight: "400",
    subsets: ["latin"],
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <NextUIProvider>
            <main className={roboto_serif.className}>
                <SEO
                    description="Web Portfolio Adrian Busse - Frontend Entwicklung mit ReactJS - Konzeptionierung und Umsetzung von Web-Apps - erstellen von Personel Websites und Web API"
                    title="Adrian Busse - Freelancer Webentwicklung"
                />
                <Header />
                <Component {...pageProps} />
                <Analytics/>
            </main>
        </NextUIProvider>

    );
}
