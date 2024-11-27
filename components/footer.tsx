"use client"

import Link from "next/link"
import { Mail, Facebook, Youtube, Instagram, Phone, MapPin } from 'lucide-react'
import { motion } from "framer-motion"

const socialLinks = [
  { name: "Email", href: "unescosocietymrcm@gmail.com", icon: Mail },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "https://www.youtube.com/@UNESCOSocietyMRCM", icon: Youtube },
  { name: "Instagram", href: "#", icon: Instagram },
]

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Head Masters", href: "#head-masters" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-2xl font-bold"
          >
            UNESCO Society
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            Mahinda Rajapaksha College Matara
          </motion.p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              >
                <SocialIcon {...link} />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xl font-semibold"
          >
            Quick Links
          </motion.h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link href={link.href} className="hover:text-gray-300">
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xl font-semibold"
          >
            Contact Us
          </motion.h4>
          <address className="not-italic">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              +94 123 456 789
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 flex items-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              info@unescosociety.com
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Matara, Sri Lanka
            </motion.p>
          </address>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 border-t border-gray-800 pt-8 text-center"
      >
        <p>&copy; 2024 <a href="https://rishbropromax.github.io" target="_blank">Rish Studio</a> & <a href="https://github.com/darkwaves-ofc" target="_blank">Dark Waves</a> - Mahinda Rajapaksha College Matara. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

function SocialIcon({ name, href, icon: Icon }: { name: string; href: string; icon: React.ElementType }) {
  return (
    <Link href={href} className="group relative">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-2 py-1 text-xs text-black"
      >
        {name}
      </motion.span>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
    </Link>
  )
}

