import Carousel from "./Carousel";
import Background from '@/app/_components/Background'

export default function Opiniones() {
  return (
    <div className='opiniones'>
      <h1>Opiniones</h1>
      <Carousel/>
      <Background page='opiniones'/>
    </div>
  )
}