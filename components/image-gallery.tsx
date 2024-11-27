"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import galleryImages from "@/public/gallery"

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }, [])

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true)
  }, [])

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevImage()
      } else if (event.key === "ArrowRight") {
        nextImage()
      } else if (event.key === "Escape") {
        closeFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextImage, prevImage, closeFullscreen])

  return (
    <section id="gallery" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our <span className="border-b-4 border-black">Gallery</span>
        </h2>
        <div className="relative mx-auto h-[60vh] max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-full w-full"
              onClick={openFullscreen}
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover cursor-pointer"
                onError={(e) => {
                  console.error(`Failed to load image: ${galleryImages[currentIndex].src}`)
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />
            </motion.div>
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex space-x-2">
              {galleryImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen View */}
        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl h-[80vh]"
            >
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-contain"
              />
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/75"
                aria-label="Close fullscreen"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
