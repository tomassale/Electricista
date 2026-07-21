import Image from "next/image"
import { urlLlamada, urlWhatsapp } from "@/app/_lib/contact"

export default function Emergency() {
  return (
    <div className='emergency'>
      <div className="call">
        <a href={urlLlamada()}>
          <Image src={'/img/contact/llamada.webp'} width={60} height={60} alt="Llamar Electricista"/>
        </a>
      </div>
      <div className="whatsapp">
        <a href={urlWhatsapp()} target="_blank" rel="noopener noreferrer">
          <Image src={'/img/contact/whatsapp.webp'} width={60} height={60} alt="Mensaje a Electricista"/>
        </a>
      </div>
    </div>
  )
}