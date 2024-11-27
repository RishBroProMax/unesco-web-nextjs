import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google";

// Define metadata for better SEO
export const metadata: Metadata = {
  title: "UNESCO Society - Mahinda Rajapaksha College Matara",
  description:
    "Official website of the UNESCO Society at Mahinda Rajapaksha College Matara. Explore our activities, mission, and contributions to cultural heritage and education.",
  keywords:
    "UNESCO, Mahinda Rajapaksha College, Matara, education, cultural heritage, UNESCO society, student activities, Sri Lanka",
  authors: [{ name: "UNESCO Society", url: "https://unesco.mrcm.lk" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  applicationName: "UNESCO Society Website",
  openGraph: {
    title: "UNESCO Society - Mahinda Rajapaksha College Matara",
    description:
      "Discover the work of the UNESCO Society at Mahinda Rajapaksha College Matara. Promoting education, culture, and heritage in Sri Lanka.",
    url: "https://unesco.mrcm.lk",
    siteName: "UNESCO Society - Mahinda Rajapaksha College",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "UNESCO Society - Mahinda Rajapaksha College Matara",
    description:
      "Explore the official website of the UNESCO Society at Mahinda Rajapaksha College Matara. Dedicated to education, culture, and heritage.",
  },
};

// Import Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Root Layout with SEO Enhancements
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${playfair.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="UNESCO Society" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unesco.mrcm.lk" />
        <meta
          property="og:title"
          content="UNESCO Society - Mahinda Rajapaksha College Matara"
        />
        <meta
          property="og:description"
          content="Discover the work of the UNESCO Society at Mahinda Rajapaksha College Matara. Promoting education, culture, and heritage in Sri Lanka."
        />
        <meta property="og:url" content="https://unesco.mrcm.lk />
        <meta
          property="og:site_name"
          content="UNESCO Society - Mahinda Rajapaksha College"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:title"
          content="UNESCO Society - Mahinda Rajapaksha College Matara"
        />
        <meta
          property="twitter:description"
          content="Explore the official website of the UNESCO Society at Mahinda Rajapaksha College Matara. Dedicated to education, culture, and heritage."
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
