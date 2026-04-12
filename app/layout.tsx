import type { Metadata } from "next";
import { JetBrains_Mono, Raleway, Noto_Serif } from "next/font/google";
import "./globals.css";

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
      className={` ${notoSans.variable} ${jetBrainsMono.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
