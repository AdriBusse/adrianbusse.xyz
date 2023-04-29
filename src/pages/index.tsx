import Image from "next/image";
import sophie from "../assets/images/sophie.jpg";
import IconLink from "@/components/molecules/IconLink";
import { contactData } from "@/assets/data/contactData";
import SEO from "@/components/molecules/SEO";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SEO
        description="Web Portfolio Adrian Busse - Frontend Entwicklung mit ReactJS - Konzeptionierung und Umsetzung von Web-Apps - erstellen von Personel Websites und Web API"
        title="Adrian Busse - Freelancer Webentwicklung"
      />
      <div
        className={`flex min-h-screen w-full lg:w-3/6 flex-col items-start justify-center pt-10 pb-10 `}
      >
        <div className="mx-auto">
          <Image
            src={sophie}
            height={150}
            width={150}
            alt="profilepicture"
            className="mb-10 overflow-hidden border border-black rounded-full "
          />

          <h1 className="">Sophie Nguyen</h1>
          <p className="text-lg font-bold">Marketing Specialist</p>
          <ul className="mb-16">
            <li>ReactJS</li>
            <li>Web-Apps</li>
            <li>Personel Websites</li>
            <li>Web APIs</li>
          </ul>
          <h2>Contact</h2>
          <ul>
            {contactData.map((contact) => {
              return (
                <li key={contact.text}>
                  <IconLink
                    text={contact.text}
                    icon={contact.icon}
                    link={contact.link}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
