import Image from 'next/image'

export default function Map() {
  return (
    <div className='map'>
      <Image 
        src={'/img/coverage/map.png'} 
        alt='Mapa de covertura' 
        height={450} 
        width={900} 
        draggable='false'
      />
    </div>
  )
}