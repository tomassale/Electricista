import Background from '@/app/_components/Background'
import Map from './Map'
import Coverage from './Coverage'

export default function Cobertura() {
  return (
    <div className='cobertura'>
      <h1>Cobertura</h1>
      <div>
        <Map/>
        <Coverage/>
      </div>
      <Background page='cobertura'/>
    </div>
  )
}