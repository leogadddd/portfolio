import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import "./styles/fonts";

const globalFont = Poppins({
  display: "swap",
  weight: ["300", "400", "700", "500"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Leo Gadil - Software Developer",
  description:
    "Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
  keywords: ["Leo Gadil", "Software Developer", "Game Developer"],
  authors: [{ name: "Leo Gadil", url: "https://leogadil.com" }],
  openGraph: {
    title: "Leo Gadil - Software Developer",
    description:
      "Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
    url: "https://leogadil.com",
    images: "/images/cover.png",
  },
  twitter: {
    title: "Leo Gadil - Software Developer",
    description:
      "Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
    images: "/images/cover.png",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = { themeColor: "#f56f10" };

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
