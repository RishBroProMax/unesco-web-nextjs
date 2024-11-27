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
    // Disable right-click
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable developer shortcuts
    const disableShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || // Open DevTools
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Inspect Element
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Console
        (e.ctrlKey && e.key === "U") // View Source
      ) {
        e.preventDefault();
        alert(
          "Developer tools are disabled on this page. Contact Website Developer in Footer"
        );
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

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
    <main
      className="min-h-screen"
      style={{
        scrollBehavior: "smooth", // Enable smooth scrolling
      }}
    >
      <HeroSection />
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
