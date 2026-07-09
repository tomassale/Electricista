'use client'

import cards from '@/public/json/cards.json'
import Image from 'next/image'
import { useState } from 'react'

const categorias = [
  { key: 'comercio', label: 'Comercio' },
  { key: 'hogar', label: 'Hogar' },
  { key: 'tramites', label: 'Trámites' },
] as const

type Categoria = (typeof categorias)[number]['key']

const DURACION_GIRO = 300 // ms por cada media vuelta (debe coincidir con el CSS)

export default function Cards() {
  const [categoria, setCategoria] = useState<Categoria>('hogar')
  const [fase, setFase] = useState<'in' | 'out'>('in')

  const cambiarCategoria = (key: Categoria) => {
    if (key === categoria || fase === 'out') return
    // Fase 1: la card actual gira hasta 90° (queda de canto)
    setFase('out')
    setTimeout(() => {
      // Fase 2: se cambia el contenido y la nueva entra desde 90° hasta 0°
      setCategoria(key)
      setFase('in')
    }, DURACION_GIRO)
  }

  const services = cards[categoria]

  return (
    <>
      <div className='filtros'>
        {categorias.map(({ key, label }) => (
          <button
            key={key}
            className={`filtro ${categoria === key ? 'activo' : ''}`}
            onClick={() => cambiarCategoria(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='cards'>
        {services.map((obj) => (
          <div key={obj.id} className={`card ${fase === 'out' ? 'flip-out' : 'flip-in'}`}>
            <div className='hoverClass'>
              <Image src={obj.src} alt={obj.alt} fill priority/>
              <p className='descripcion'>{obj.description}</p>
            </div>
            <div className='title'>
              <p>{obj.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
