import Image from "next/image"

export default function Emergency() {
  return (
    <div className='emergency'>
      <div className="call">
        <a href="tel:+541159638765">
          <Image src={'/img/contact/llamada.png'} width={60} height={60} alt="Llamar Electricista"/>
        </a>
      </div>
      <div className="whatsapp">
        <a href='https://wa.me/541159638765?text=Hola'>
          <Image src={'/img/contact/whatsapp.png'} width={60} height={60} alt="Mensaje a Electricista"/>
        </a>
      </div>
    </div>
  )
}