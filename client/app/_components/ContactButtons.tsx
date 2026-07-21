import { COLOR_LLAMADA, COLOR_WHATSAPP, urlLlamada, urlWhatsapp } from '@/app/_lib/contact'

// Par de botones Whatsapp / Llamar reutilizado en varias secciones del sitio.
export default function ContactButtons() {
  return (
    <div className='botones'>
      <a
        style={{ backgroundColor: COLOR_WHATSAPP }}
        href={urlWhatsapp()}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Mensaje por Whatsapp'
      >
        Whatsapp
      </a>
      <a
        style={{ backgroundColor: COLOR_LLAMADA }}
        href={urlLlamada()}
        aria-label='Llamar por teléfono'
      >
        Llamar
      </a>
    </div>
  )
}
