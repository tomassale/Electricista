import Image from "next/image"

export default function Emergency() {
  return (
    <div className='emergency'>
      <div className="call">
        <a href="tel:+541159638765">
          <Image src='/img/contact/Llamada.png' width={30} height={30} alt="Llamar Electricista"/>
        </a>
      </div>
      <div className="whatsapp">
        <a href='https://wa.me/541159638765?text=Hola'>
          <Image src='/img/contact/Whatsapp.png' width={30} height={30} alt="Mensaje a Electricista"/>
        </a>
      </div>
    </div>
  )
}