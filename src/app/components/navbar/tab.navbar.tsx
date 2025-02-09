import React from "react";
import { headers } from "next/headers";
import { tabs } from "@/components/navbar/tab";
import Tab from "@/app/components/navbar/tabcomponent.navbar";

const TabComponent = async () => {
	// const pathname = (await headers()).get("x-pathname");

	return (
		<>
			<ul className="flex items-center justify-center">
				{tabs.map((tab) => (
					<Tab
						key={`navbar-${tab.routeName}`}
						routeName={tab.routeName}
						route={tab.route}
						Icon={tab.Icon}
						active={false}
					/>
				))}
			</ul>
		</>
	);
};

export default TabComponent;
