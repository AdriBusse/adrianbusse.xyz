
import HeroSection from "@/components/organism/HeroSection";
import {InformationSection} from "@/components/organism/InformationSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <InformationSection />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    };
}
