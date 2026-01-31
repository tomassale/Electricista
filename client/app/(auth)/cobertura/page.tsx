"use client"
import dynamic from 'next/dynamic'
import Background from '@/app/_components/Background'
import InfoContainer from './rightComponent/infoContainer'

const MapComponent = dynamic(() => import('@/app/(auth)/cobertura/leftComponent/MapComponent'), {
  ssr:false,
  loading: () => <p>Cargando mapa...</p>
})

export default function Cobertura() {
  return (
    <div className='cobertura'>
      <h1>Cobertura</h1>
      <div className="main"> 
        <MapComponent/>
        <InfoContainer/>
      </div>
      <Background page='cobertura'/>
    </div>
  )
}