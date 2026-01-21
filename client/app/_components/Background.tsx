import background from '@/public/json/backgrounds.json'
import Image from 'next/image'

export default function Background({page}: {page:string}) {

  const bgImage = background.find(
    (bg) => bg.page === page
  );

  if(!bgImage) return null

  return (
    <div className='background'>
      <Image
        src={bgImage.src}
        alt={bgImage.alt ||"Imagen de Fondo"}
        fill
        style={{ objectFit: "cover", zIndex: -1}}
        priority={bgImage.priority}
      />
    </div>
  )
}