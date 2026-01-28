"use client"
import dynamic from 'next/dynamic'
import Background from '@/app/_components/Background'
import Coverage from './Coverage'

const MapComponent = dynamic(() => import('@/app/(auth)/cobertura/MapComponent'), {
  ssr:false,
  loading: () => <p>Cargando mapa...</p>
})

export default function Cobertura() {
  return (
    <div className='cobertura'>
      <h1>Cobertura</h1>
      <div>
        <MapComponent/>
        <Coverage/>
      </div>
      <Background page='cobertura'/>
    </div>
  )
}