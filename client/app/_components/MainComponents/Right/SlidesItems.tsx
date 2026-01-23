import LinkSlides from "./LinkSlides"

// Definimos la estructura de tus datos (opcional pero recomendado)
interface SlideData {
  title: string
  text: string
  link: string
  button: string
}

interface SlidesItemsProps {
  readonly slide: SlideData
  readonly onNext: () => void
  readonly onPrev: () => void
  readonly currentIndex: number
}

export default function SlidesItems({ slide, onNext, onPrev, currentIndex }: SlidesItemsProps) {
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