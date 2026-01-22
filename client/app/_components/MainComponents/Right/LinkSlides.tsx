import Link from 'next/link'

interface HeaderProps{
  readonly link: string,
  readonly index: number,
  readonly title: string,
  readonly text: string,
  readonly button: string
}

export default function LinkSlides({link, index, title, text, button} : HeaderProps) {
  return (
    <Link href={link} draggable='false'>
      <h2 className="slides-title">
        <span key={index} className="anim-text">
          {title}
        </span>
      </h2>
      <p className="slides-text">
        <span key={index} className="anim-text">
          {text}
        </span>
      </p>
      <button className="slides-button">
        <span key={index} className="anim-text">
          {button}
        </span>
      </button>
    </Link>
  )
}