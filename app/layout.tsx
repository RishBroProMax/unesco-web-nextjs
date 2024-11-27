import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google"

export const metadata: Metadata = {
  title: "UNESCO Society - Mahinda Rajapaksha College, Matara",
  description:
    "Welcome to the official website of the UNESCO Society at Mahinda Rajapaksha College, Matara. Learn about our initiatives, cultural heritage programs, and contributions to global education.",
  keywords: [
    "UNESCO Society",
    "Mahinda Rajapaksha College",
    "Matara",
    "Education",
    "Cultural Heritage",
    "Global Initiatives",
    "Student Programs",
    "Cultural Events",
    "Sustainability",
    "UNESCO Projects",
  ],
  authors: [
    { name: "UNESCO Society - Mahinda Rajapaksha College, Matara" },
  ],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  charset: "UTF-8",
  themeColor: "#004aad",
  additionalMetaTags: [
    {
      name: "application-name",
      content: "UNESCO Society - Mahinda Rajapaksha College",
    },
    {
      name: "theme-color",
      content: "#004aad", // Matches themeColor for consistency
    },
    {
      name: "robots",
      content: "index, follow", // Encourages search engines to index and follow links
    },
    {
      name: "author",
      content: "UNESCO Society, Member Rishmika Sandanu",
    },
    {
      name: "rating",
      content: "General", // Indicates content is suitable for all audiences
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge", // Ensures compatibility with Internet Explorer edge mode
    },
  ],
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
