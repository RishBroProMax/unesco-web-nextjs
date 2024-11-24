"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { LoadingAnimation } from "@/components/loading-animation";
import Image from "next/image";

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <LoadingAnimation />,
});
const HeadMastersSection = dynamic(
  () => import("@/components/head-masters-section"),
  {
    loading: () => <LoadingAnimation />,
  }
);
const ImageGallery = dynamic(() => import("@/components/image-gallery"), {
  loading: () => <LoadingAnimation />,
});
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <LoadingAnimation />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* test image */}
      <Image src={"/111.png"} alt="test image" width={500} height={200} />
      <Suspense fallback={<LoadingAnimation />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <HeadMastersSection />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <ImageGallery />
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Footer />
      </Suspense>
    </main>
  );
}
