"use client"

import slides from "@/public/json/slides.json"
import SlidesItems from "./SlidesItems"
import { useSlideshow } from "@/app/hooks/useSlideshow"

export default function Slides() {
  const { currentIndex, next, prev } = useSlideshow(slides.length)

  return (
    <div className="slides">
      <SlidesItems
        slide={slides[currentIndex]}
        currentIndex={currentIndex}
        onNext={next}
        onPrev={prev}
      />
    </div>
  )
}