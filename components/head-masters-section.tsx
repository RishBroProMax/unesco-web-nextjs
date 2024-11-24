"use client"


import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const headMasters = [
  {
    name: "Ms.Kalumi Gunathilaka",
    role: "Vice Principal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ms.G.G.Dulani Kamal Renuka",
    role: "Principal",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ms.Poornima Dilani",
    role: "Teacher In Charge",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function HeadMastersSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="head-masters" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Our Head <span className="border-b-4 border-black">Masters</span>
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {headMasters.map((master, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-full shadow-lg"
              >
                <Image
                  src={master.image}
                  alt={master.name}
                  width={200}
                  height={200}
                  className="h-48 w-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image for ${master.name}`)
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </motion.div>
              <h3 className="text-2xl font-semibold">{master.name}</h3>
              <p className="text-lg font-medium text-blue-600">{master.role}</p>
              <p className="text-center text-gray-600">{master.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

