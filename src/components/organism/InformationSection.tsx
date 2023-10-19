import Image from "next/image";
import profile from "@/assets/images/profile_picture.jpeg";
import {contactData} from "@/assets/data/contactData";
import IconLink from "@/components/molecules/IconLink";
import {useEffect} from "react";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)


export const InformationSection = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#gsapscrolltrigger",
            start: "top 60%",
            onEnter: () => {
                //console.log("animation started")
            }
        },
    });
    const animate = () => {
        tl.to('#profilepicture', {
            opacity: 1,
            duration: 1.2
        })
            .to('#name', {
                opacity: 1,
                duration: 1.2
            }, '>-1')
            .to('#job', {
                opacity: 1,
                duration: 1.2
            }, '>-1')
            .to('#tech li', {
                stagger: 0.3,
                scaleY: 1,
                duration: 0.7
            }, '>-1')
            .to('#contact', {
                opacity: 1,
                duration: 1.2
            },)
            .to('#socialList li', {
                stagger: 0.3,
                scaleY: 1,
                duration: 0.7
            }, '>-1')
    }

    useEffect(() => {
        animate()
    }, []);


    return (
        <div id={"gsapscrolltrigger"} className="flex justify-center bg-landmarkBackground bg-no-repeat bg-cover">

            <div
                className={`flex min-h-screen w-full lg:w-3/6 flex-col items-start justify-center py-24 `}
            >
                <div className="mx-auto">
                    <Image
                        id={"profilepicture"}
                        src={profile}
                        height={150}
                        width={150}
                        alt="profilepicture"
                        className="rounded-full overflow-hidden border border-black mb-10 opacity-0"
                    />

                    <h1 id={"name"} className="opacity-0">Adrian Busse</h1>
                    <p id={"job"} className="font-bold text-lg opacity-0">Freelance Web Developer</p>
                    <ul id={"tech"} className="mb-16">
                        {['ReactJS', 'Web-Apps', 'personel Websites', 'Web APIs']
                            .map((item, index) => {
                                return (
                                    <li key={index + item} className={"scale-y-0"}>{item}</li>
                                )
                            })
                        }

                    </ul>
                    <h2 id={"contact"} className={"opacity-0"}>Contact</h2>
                    <ul id={"socialList"}>
                        {contactData.map((contact) => {
                            return (
                                <li className={"scale-y-0"} key={contact.text}>
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
};
