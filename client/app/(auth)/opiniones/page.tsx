import Carousel from "./Carousel";
import Background from '@/app/_components/Background'

export default function Opiniones() {
  return (
    <div className='opiniones'>
      <h1>Opiniones</h1>
      <Carousel classN='carousel carouselLeft'/>
      <Carousel classN='carousel carouselRight'/>  
      <Background page='opiniones'/>
    </div>
  )
}