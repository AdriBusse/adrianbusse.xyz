import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSquareTwitter,
  faLinkedin,
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import profile from "../assets/images/profile_picture.jpeg";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Adrian Busse Freelancer</title>
        <meta
          name="description"
          content="Web Portfolio Adrian Busse - Frontend Entwicklung mit ReactJS - Konzeptionierung und Umsetzung von Web-Apps - erstellen von Personel Websites und Web APIs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Adrian Busse - Freelancer Webentwicklung"
        />
        <meta
          property="og:description"
          content="Web Portfolio Adrian Busse - Frontend Entwicklung mit ReactJS - Konzeptionierung und Umsetzung von Web-Apps - erstellen von Personel Websites und Web API"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AdrianBusse2" />
        <meta name="twitter:creator" content="@AdrianBusse2" />
        <meta name="twitter:url" content="http://www.adrianbusse.xyz" />
        <meta
          name="twitter:title"
          content="Adrian Busse - Freelancer Webentwicklung"
        />
        <meta
          name="twitter:description"
          content="Web Portfolio Adrian Busse - Frontend Entwicklung mit ReactJS - Konzeptionierung und Umsetzung von Web-Apps - erstellen von Personel Websites und Web API"
        />
      </Head>
      <div
        className={`flex min-h-screen w-3/6 flex-col items-start justify-center pt-10 pb-10 `}
      >
        <div className="mx-auto">
          <Image
            src={profile}
            height={150}
            width={150}
            alt="profilepicture"
            className="rounded-full overflow-hidden border border-black mb-10 "
          />

          <h1 className="">Adrian Busse</h1>
          <h3>Freelance Web Developer</h3>
          <ul className="mb-16">
            <li>ReactJS</li>
            <li>Web-Apps</li>
            <li>Personel Websites</li>
            <li>Web APIs</li>
          </ul>
          <h2>Contact</h2>
          <ul>
            <li>
              <Link
                className="hover:underline"
                href="mailto:adri.busse@gmail.com"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1rem" }}
                />{" "}
                adri.busse@gmail.com
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://twitter.com/AdrianBusse2"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faSquareTwitter}
                  style={{ fontSize: "1rem" }}
                />{" "}
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://github.com/AdriBusse"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1rem" }} />{" "}
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://www.linkedin.com/in/adrian-busse-a12303166/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "1rem" }}
                />{" "}
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://www.facebook.com/adri.busse"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  style={{ fontSize: "1rem" }}
                />{" "}
                Facebook
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://www.instagram.com/adri_busse/?hl=de"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "1rem" }}
                />{" "}
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
