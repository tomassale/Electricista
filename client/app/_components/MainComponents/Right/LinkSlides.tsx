import Link from 'next/link'

interface HeaderProps{
  link: string,
  index: number,
  title: string,
  text: string,
  button: string
}

export default function LinkSlides({link, index, title, text, button} : Readonly<HeaderProps>) {
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
