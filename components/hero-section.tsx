"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "./nav-bar";
import Link from "next/link";
import { one, three, two, four, five } from "@/public/hero";

const backgroundImages = [one, two, three, four, five];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImage]}
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <NavBar />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            Welcome to
          </motion.h1>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="font-heading text-xl sm:text-2xl md:text-3xl"
          >
            Mahinda Rajapaksha College Matara
          </motion.p>
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="font-heading text-5xl font-bold sm:text-6xl md:text-7xl"
          >
            UNESCO Society
          </motion.h2>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="text-xl sm:text-2xl"
          >
            Official Website
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex space-x-6"
        >
          <SocialIcon
            href="#contact"
            icon={<Mail className="h-6 w-6" />}
            label="Email"
          />
          <SocialIcon
            href="#"
            icon={<Facebook className="h-6 w-6" />}
            label="Facebook"
          />
          <SocialIcon
            href="#"
            icon={<Youtube className="h-6 w-6" />}
            label="YouTube"
          />
          <SocialIcon
            href="#"
            icon={<Instagram className="h-6 w-6" />}
            label="Instagram"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} className="group relative">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white"
      >
        {label}
      </motion.span>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40"
      >
        {icon}
      </motion.div>
    </Link>
  );
}
