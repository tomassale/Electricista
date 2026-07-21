import { urlWhatsapp } from '@/app/_lib/contact'

export default function CoverageItem({zone}: Readonly<{zone: string}>) {
  return (
    <a
      href={urlWhatsapp(`Hola, quería consultar por la disponibilidad del servicio en la zona ${zone}`)}
      target="_blank"
      rel="noopener noreferrer"
      className='coverageitem'>
        <p>{zone}</p>
    </a>
  )
}