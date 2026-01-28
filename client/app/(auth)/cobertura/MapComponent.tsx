import Image from 'next/image'

export default function MapComponent() {
  return (
    <div className='map'>
      <Image 
        src={'/img/coverage/map.png'} 
        alt='Mapa de cobertura' 
        height={450} 
        width={900} 
        draggable='false'
      />
    </div>
  )
}