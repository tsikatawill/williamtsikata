import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SocialPillProps } from "@/types";

export const SocialMediaLinks: SocialPillProps[] = [
  {
    name: "Github",
    icon: AiFillGithub(),
    link: "https://github.com/tsikatawill",
  },
  {
    name: "Twitter",
    icon: BsTwitter(),
    link: "https://twitter.com/dev_willman",
  },
  {
    name: "Whatsapp",
    icon: AiOutlineWhatsApp(),
    link: "https://wa.me/+233550381060",
  },
  {
    name: "Facebook",
    icon: BsFacebook(),
    link: "https://web.facebook.com/profile.php?id=100008541333215",
  },
  {
    name: "Instagram",
    icon: BsInstagram(),
    link: "https://instagram.com/tsi.ka.ta",
  },
];
