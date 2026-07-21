import { urlWhatsapp } from '@/app/_lib/contact'

export default function Whatsapp() {
  return (
    <a
        href={urlWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
      >
      <button className='botonMensaje'>
        Whatsapp
      </button>
    </a>
  )
}