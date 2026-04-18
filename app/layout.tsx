import type { Metadata } from "next";
import { JetBrains_Mono, Raleway, Noto_Serif } from "next/font/google";
import "./globals.css";
import MobilePlaceholder from "./components/MobilePlaceholder";


const notoSans = Noto_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-curvy",
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Izzy Lenz",
  description: "Portfolio for Izzy Lenz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${notoSans.variable} ${jetBrainsMono.variable} ${raleway.variable} h-full antialiased text-white`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <div className="hidden lg:flex lg:flex-col lg:flex-1">
          {children}
        </div>
        <MobilePlaceholder />
      </body>
    </html>
  );
}
