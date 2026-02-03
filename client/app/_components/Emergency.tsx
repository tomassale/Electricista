import Image from "next/image"

export default function Emergency() {
  return (
    <div className='emergency'>
      <div className="call">
        <a href="tel:+541159098126">
          <Image src={'/img/contact/llamada.webp'} width={60} height={60} alt="Llamar Electricista"/>
        </a>
      </div>
      <div className="whatsapp">
        <a href='https://wa.me/541159098126'>
          <Image src={'/img/contact/whatsapp.webp'} width={60} height={60} alt="Mensaje a Electricista"/>
        </a>
      </div>
    </div>
  )
}