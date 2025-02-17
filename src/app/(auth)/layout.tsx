import React from "react";

export default async function AppLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {

	return (
		<div className="mx-auto h-screen max-w-screen-lg">
			<div className="">
				{children}
			</div>
		</div>
	)
}