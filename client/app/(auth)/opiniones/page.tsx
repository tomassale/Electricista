import Carousel from "./Carousel";

export default function Opiniones() {
  return (
    <div className='opiniones'>
      <h1>Opiniones</h1>
      <Carousel classN='carousel carouselLeft'/>
      <Carousel classN='carousel carouselRight'/>  
    </div>
  )
}