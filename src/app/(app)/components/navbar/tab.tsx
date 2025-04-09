import { ReactNode } from "react";
import {
  TbHomeFilled,
  TbBriefcaseFilled,
  TbBallpenFilled,
} from "react-icons/tb";

export type tab = {
  routeName: string;
  route: string;
  Icon: ReactNode;
  hideOnProd?: boolean;
};

export interface TabProps {
  routeName: string;
  route: string;
  Icon: ReactNode;
  active: boolean;
}

const IconSize = 28;

export const tabs: tab[] = [
  {
    routeName: "Home",
    route: "/",
    Icon: <TbHomeFilled size={IconSize} />,
  },
  {
    routeName: "Projects",
    route: "/projects",
    Icon: <TbBriefcaseFilled size={IconSize} />,
  },
  {
    routeName: "Blogs",
    route: "https://sonnet.leogadil.com/",
    Icon: <TbBallpenFilled size={IconSize} />,
  },
];
