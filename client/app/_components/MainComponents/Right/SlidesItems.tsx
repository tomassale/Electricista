import LinkSlides from "./LinkSlides"

interface SlideData {
  title: string
  text: string
  link: string
  button: string
}

interface SlidesItemsProps {
  slide: SlideData
  onNext: () => void
  onPrev: () => void
  currentIndex: number
}

export default function SlidesItems({ slide, onNext, onPrev, currentIndex }: Readonly<SlidesItemsProps>) {
  return (
    <>
      <button 
        className="slides-arrow slides-arrow-left" 
        onClick={onPrev}
        aria-label="Anterior"
      >
        ‹
      </button>

      <LinkSlides
        link={slide.link}
        index={currentIndex}
        title={slide.title}
        text={slide.text}
        button={slide.button}
      />

      <button 
        className="slides-arrow slides-arrow-right" 
        onClick={onNext}
        aria-label="Siguiente"
      >
        ›
      </button>
    </>
  )
}