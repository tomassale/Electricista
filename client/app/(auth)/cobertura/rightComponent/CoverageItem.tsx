export default function CoverageItem({zone}: Readonly<{zone: string}>) {
  return (
    <div className='coverageitem'>
      <a 
        href={`https://wa.me/5491159098126?text=${encodeURIComponent(`Hola, quería consultar por la disponibilidad del servicio en la zona ${zone}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{zone}</p>
      </a>
    </div>
  )
}