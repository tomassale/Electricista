"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import slides from "@/public/json/slides.json"

export default function Slides() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Helper to reset interval
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => changeSlide("next"), 12000)
  }

  const changeSlide = (direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % slides.length
      return (prev - 1 + slides.length) % slides.length
    })
    resetInterval() // Reset interval each time the arrow is clicked
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => changeSlide("next"), 12000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { title, text, link, button } = slides[currentIndex]

  return (
    <div className="slides">
      <button
        className="slides-arrow slides-arrow-left"
        onClick={() => changeSlide("prev")}
        aria-label="Anterior"
      >
        ‹
      </button>
      <Link href={link}>
        <h2 className="slides-title">
          <span key={currentIndex} className="anim-text">
            {title}
          </span>
        </h2>
        <p className="slides-text">
          <span key={currentIndex} className="anim-text">
            {text}
          </span>
        </p>
        <button className="slides-button">
          <span key={currentIndex} className="anim-text">
            {button}
          </span>
        </button>
      </Link>
      <button
        className="slides-arrow slides-arrow-right"
        onClick={() => changeSlide("next")}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  )
}