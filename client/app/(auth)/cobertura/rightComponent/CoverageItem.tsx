export default function CoverageItem({zone}: Readonly<{zone: string}>) {
  return (
    <a 
      href={`https://wa.me/5491159098126?text=${encodeURIComponent(`Hola, quería consultar por la disponibilidad del servicio en la zona ${zone}`)}`}
      target="_blank"
      rel="noopener noreferrer"
      className='coverageitem'>
        <p>{zone}</p>
    </a>
  )
}