import React from "react";
import Navigationbar from "@/components/navbar/navbar";
import ProfileCard from "@/components/profilecard/profilecard";

export default function AppLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navigationbar />
			<div className="mx-auto max-w-screen-lg">
				<div className="flex flex-col lg:flex-row lg:gap-16 mt-8 px-4">
					<div className="relative">
						<ProfileCard />
					</div>
					<div className="flex flex-col gap-12">
						{children}
					</div>
				</div>
			</div>
		</>
	)
}