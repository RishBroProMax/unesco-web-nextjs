"use client"


import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const headMasters = [
  
  {
    name: "Ms.Dulani Kamal Renuka",
    role: "Principal",
    description: "With years of experience in educational leadership, Ms. Dulani Kamal Renuka is the cornerstone of our school's success. Her passion for education and unwavering dedication to nurturing young minds make her a respected and visionary leader",
    image: "/masters/princi.jpg",
  },
  {
    name: "Ms.Kalumi Gunathilaka",
    role: "Vice Principal",
    description: "A dedicated and inspiring leader, Ms. Kalumi Gunathilaka excels in fostering academic excellence and ensuring a supportive environment for both students and staff. Her strategic vision and commitment to innovation drive the school towards success",
    image: "/placeholder.svg",
  },
  {
    name: "Ms.Poornima Dilani",
    role: "Teacher In Charge",
    description: "An exceptional educator, Ms. Poornima Dilani is known for her ability to connect with students and inspire them to achieve their full potential. Her tireless efforts in managing and coordinating school activities set her apart as a pillar of our institution.",
    image: "/placeholder.svg",
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

