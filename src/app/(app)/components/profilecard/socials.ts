import { IconType } from "react-icons";

import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandYoutube,
} from "react-icons/tb";

type sociallinks = {
  name: string;
  url: string;
  Icon: IconType;
};

const sociallinks: sociallinks[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/themightyguyoftheworld",
    Icon: TbBrandFacebook,
  },
  {
    name: "Github",
    url: "https://github.com/leogadddd",
    Icon: TbBrandGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leogadil/",
    Icon: TbBrandLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/leogadddd/",
    Icon: TbBrandInstagram,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@leogaddd",
    Icon: TbBrandYoutube,
  },
];

export default sociallinks;
