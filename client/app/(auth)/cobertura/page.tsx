import MapComponent from './leftComponent/MapComponent'
import InfoContainer from './rightComponent/infoContainer'

export default function Cobertura() {
  return (
    <div className='cobertura'>
      <h1>Cobertura</h1>
      <div className="main">
        <MapComponent/>
        <InfoContainer/>
      </div>
    </div>
  )
}
