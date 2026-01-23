"use client"
import dynamic from 'next/dynamic'
import Background from '@/app/_components/Background'
import Coverage from './Coverage'

const Map = dynamic(() => import('@/app/(auth)/cobertura/Map'), {
  ssr:false,
  loading: () => <p>Cargando mapa...</p>
})

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