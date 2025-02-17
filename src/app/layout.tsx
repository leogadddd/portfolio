import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import "./styles/prosemirror.css";
import "./styles/fonts";

const globalFont = Poppins({
	display: "swap",
	weight: ["300", "400", "700", "500"],
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	title: "Leo Gadil",
	description:
		"Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${globalFont.className} bg-[--color-dark] text-white antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
