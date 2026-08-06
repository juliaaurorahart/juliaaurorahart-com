import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julia Aurora Hart — Work, ideas, and experiments",
  description: "A personal home for work, ideas, and experiments by Julia Aurora Hart.",
  metadataBase: new URL("https://www.juliaaurorahart.com"),
  openGraph: {
    title: "Julia Aurora Hart",
    description: "A personal home for work, ideas, and experiments.",
    url: "https://www.juliaaurorahart.com",
    siteName: "Julia Aurora Hart",
    images: [{ url: "/og.png", width: 1792, height: 936, alt: "Julia Aurora Hart" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
