import { useState, useEffect, useCallback } from "react"

export const useSlideshow = (length: number, intervalTime: number = 12000) => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % length)
  }, [length])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + length) % length)
  }, [length])

  useEffect(() => {
    const timer = setInterval(next, intervalTime)
    return () => clearInterval(timer)
  }, [next, intervalTime, index])

  return { 
    currentIndex: index, 
    next, 
    prev 
  }
}