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
  // Categoría marcada en los botones: se actualiza al instante, sin esperar el giro
  const [seleccion, setSeleccion] = useState<Categoria>('hogar')
  const [fase, setFase] = useState<'in' | 'out'>('in')
  // Mientras dura el giro alivianamos el render (sin blur) para que no se trabe
  const [girando, setGirando] = useState(false)

  const cambiarCategoria = (key: Categoria) => {
    if (key === categoria || fase === 'out') return
    // El botón se resalta en blanco de inmediato
    setSeleccion(key)
    setGirando(true)
    // Fase 1: la card actual gira hasta 90° (queda de canto)
    setFase('out')
    setTimeout(() => {
      // Fase 2: se cambia el contenido y la nueva entra desde 90° hasta 0°
      setCategoria(key)
      setFase('in')
    }, DURACION_GIRO)
    // El giro completo son dos medias vueltas
    setTimeout(() => setGirando(false), DURACION_GIRO * 2)
  }

  const services = cards[categoria]

  return (
    <>
      <div className='filtros'>
        {categorias.map(({ key, label }) => (
          <button
            key={key}
            className={`filtro ${seleccion === key ? 'activo' : ''}`}
            onClick={() => cambiarCategoria(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`cards ${girando ? 'girando' : ''}`}>
        {services.map((obj, i) => (
          <div key={obj.id} className={`card ${fase === 'out' ? 'flip-out' : 'flip-in'}`}>
            <div className='hoverClass'>
              <Image
                src={obj.src}
                alt={obj.alt}
                fill
                sizes='(max-width: 767px) 25vw, (max-width: 1024px) 20vw, 14vw'
                priority={i < 4}
              />
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
