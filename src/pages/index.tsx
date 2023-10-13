import Image from "next/image";
import profile from "../assets/images/profile_picture.jpeg";
import IconLink from "@/components/molecules/IconLink";
import {contactData} from "@/assets/data/contactData";
import SEO from "@/components/molecules/SEO";
import HeroSection from "@/components/organism/HeroSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <div className="flex justify-center bg-landmarkBackground bg-no-repeat bg-cover	">

                <div
                    className={`flex min-h-screen w-full lg:w-3/6 flex-col items-start justify-center py-24 `}
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
                        <p className="font-bold text-lg">Freelance Web Developer</p>
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
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    };
}
