import { useState, useEffect, useCallback } from "react"

export const useSlideshow = (length: number) => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + length) % length)
  }, [length])

  useEffect(() => {
    const timer = setInterval(next, 12000)
    return () => clearInterval(timer)
  }, [next, index])

  return { 
    currentIndex: index, 
    next, 
    prev 
  }
}