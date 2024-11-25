"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { one, two } from "@/public/about"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          About <span className="border-b-4 border-black">US</span>
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={one}
              alt="Coastal view"
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                console.error("Failed to load coastal view image")
                e.currentTarget.src = "/placeholder.svg"
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:col-span-1"
          >
            <p className="text-lg leading-relaxed">
              The UNESCO Society of Mahinda Rajapaksha College Matara is dedicated to fostering global
              awareness, cultural understanding, and a commitment to education among students.
              Through various programs and activities, we aim to inspire young minds to embrace
              diversity, promote peace, and contribute positively to society. Our mission is to cultivate
              leadership skills and values that align with UNESCO&apos;s principles of education,
              science, and culture for a better future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={two}
              alt="Train on bridge"
              width={400}
              height={300}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                console.error("Failed to load train bridge image")
                e.currentTarget.src = "/placeholder.svg"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

