"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { LoadingAnimation } from "@/components/loading-animation";
import Image from "next/image";

// Dynamic imports with fallbacks
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
    console.log("Initializing website security measures...");

    // Disable right-click
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      console.warn("Right-click is disabled on this website.");
    };

    // Disable developer shortcuts
    const disableShortcuts = (e: KeyboardEvent) => {
      const devToolsKeys = [
        { ctrlKey: true, shiftKey: true, key: "I" },
        { ctrlKey: true, shiftKey: true, key: "J" },
        { ctrlKey: true, key: "U" },
        { key: "F12" },
      ];
      const isDevToolsKey = devToolsKeys.some(
        (key) =>
          e.ctrlKey === key.ctrlKey &&
          e.shiftKey === key.shiftKey &&
          e.key === key.key
      );

      if (isDevToolsKey) {
        e.preventDefault();
        console.error("Blocked attempt to open developer tools.");
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableShortcuts);

    console.log("Security measures applied: Developer tools and right-click disabled.");

    return () => {
      console.log("Cleaning up security event listeners...");
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  useEffect(() => {
    console.log("Setting loading screen timer...");
    const timer = setTimeout(() => {
      console.log("Loading complete. Rendering website.");
      setIsLoading(false);
    }, 2000);

    return () => {
      console.log("Clearing loading screen timer...");
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    console.log("Displaying loading animation...");
    return <LoadingAnimation />;
  }

  return (
    <main
      className="min-h-screen"
      style={{
        scrollBehavior: "smooth", // Enable smooth scrolling
      }}
    >
      {console.log("Rendering main website components...")}
      <HeroSection />
      <Suspense fallback={<LoadingAnimation />}>
        <AboutSection />
        {console.log("About Section loaded.")}
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <HeadMastersSection />
        {console.log("HeadMasters Section loaded.")}
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <ImageGallery />
        {console.log("Image Gallery loaded.")}
      </Suspense>
      <Suspense fallback={<LoadingAnimation />}>
        <Footer />
        {console.log("Footer loaded.")}
      </Suspense>
    </main>
  );
}
