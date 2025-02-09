

import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { TbHomeFilled, TbBriefcaseFilled, TbBallpenFilled, TbShieldFilled } from "react-icons/tb";

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
};

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
		route: "/blogs",
		Icon: <TbBallpenFilled size={IconSize} />
	}
];
