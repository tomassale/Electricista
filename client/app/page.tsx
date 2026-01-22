import Background from "./_components/Background";
import LeftIndex from "./_components/MainComponents/Left/LeftIndex";
import Slides from "./_components/MainComponents/Right/Slides";

export default function Page() {

  return (
    <div className='nosotros'>
      <LeftIndex/>
      <Slides/>
      <Background page="nosotros"/>
    </div>
  )
}