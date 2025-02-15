import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faSquareXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const contactData:{ text: string, icon: any, link: string}[] = [
  {
    text: "adri.busse@gmail.com",
    icon: faEnvelope,
    link: "mailto:adri.busse@gmail.com",
  },
  {
    text: "Twitter",
    icon: faSquareXTwitter,
    link: "https://twitter.com/AdrianBusse2",
  },
  { text: "GitHub", icon: faGithub, link: "https://github.com/AdriBusse" },
  {
    text: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/adrian-busse-a12303166/",
  },
  {
    text: "Facebook",
    icon: faSquareFacebook,
    link: "https://www.facebook.com/adri.busse",
  },
  {
    text: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/adri_busse/?hl=de",
  },
];
