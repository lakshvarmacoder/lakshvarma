import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // <--- Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laksh Varma", // Updated Title
  description: "Portfolio of Laksh Varma, specialized in Systems & Web Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        <SmoothScroll /> {/* <--- Add this here */}
        {children}
      </body>
    </html>
  );
}