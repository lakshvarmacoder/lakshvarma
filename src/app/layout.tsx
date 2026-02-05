import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laksh Varma | Systems & Web Architecture",
  description: "Computer Engineering student building efficient and beautiful software.",
  openGraph: {
    title: "Laksh Varma",
    description: "Computer Engineering student building efficient and beautiful software.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f7",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSans.className} bg-white text-black antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
