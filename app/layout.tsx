import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google"

export const metadata: Metadata = {
  title: "UNESCO Society - Mahinda Rajapaksha College Matara",
  description:
    "Official website of the UNESCO Society at Mahinda Rajapaksha College Matara",
keywords:
    "UNESCO, Mahinda Rajapaksha College, Matara, education, cultural heritage, UNESCO society, student activities, Sri Lanka",
authors: [{ name: "UNESCO Society", url: "https://unesco.mrcm.lk" }],
viewport: "width=device-width, initial-scale=1.0",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
