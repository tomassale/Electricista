import services from '@/public/json/cards.json'
import Image from 'next/image'

export default function Cards() {
  return (
    <div className='cards'>
      {services.map((obj) => (
        <div key={obj.id} className='card'>
          <div className='hoverClass'>
            <Image src={obj.src} alt={obj.alt} fill/>
            <p className='descripcion'>{obj.description}</p>
          </div>
          <div className='title'>
            <p>{obj.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}