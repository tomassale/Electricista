'use client'

import cards from '@/public/json/cards.json'
import { useState } from 'react'

const WHATSAPP = '541159098126'

const secciones = [
  { key: 'hogar', label: 'Hogar', desc: 'Instalaciones y reparaciones en tu casa' },
  { key: 'comercio', label: 'Comercio', desc: 'Servicios eléctricos para tu comercio' },
  { key: 'tramites', label: 'Trámites', desc: 'Gestiones y documentación eléctrica' },
] as const

type Seccion = (typeof secciones)[number]['key']
type Paso = 'seccion' | 'servicios' | 'datos' | 'resumen'

export default function Guia() {
  const [paso, setPaso] = useState<Paso>('seccion')
  const [seccion, setSeccion] = useState<Seccion | null>(null)
  const [seleccionados, setSeleccionados] = useState<string[]>([])
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const seccionActiva = secciones.find((s) => s.key === seccion)

  const elegirSeccion = (key: Seccion) => {
    setSeccion(key)
    setSeleccionados([]) // al cambiar de sección se reinicia la selección
    setPaso('servicios')
  }

  const toggleServicio = (titulo: string) => {
    setSeleccionados((prev) =>
      prev.includes(titulo) ? prev.filter((t) => t !== titulo) : [...prev, titulo]
    )
  }

  const datosOk = Boolean(nombre.trim() && mensaje.trim())

  const consultar = () => {
    if (!seccionActiva || !datosOk) return
    const lineas = [
      `¡Hola soy ${nombre.trim()}! Quería consultar por un presupuesto.`,
      `-Sección: ${seccionActiva.label}`,
    ]
    if (seleccionados.length > 0) {
      lineas.push(`-Servicios: ${seleccionados.join(', ')}`)
    }
    lineas.push('') // línea en blanco antes del mensaje del cliente
    lineas.push(mensaje.trim())
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Resumen de lo elegido, visible durante todo el proceso
  const resumen = seccionActiva && (
    <div className='resumenSel'>
      <span className='resumenItem'>
        <b>Sección:</b> {seccionActiva.label}
      </span>
    </div>
  )

  return (
    <div className='guia'>
      {/* Paso 1: elegir la sección */}
      {paso === 'seccion' && (
        <div className='paso'>
          <p className='pasoTitulo'>¿Para qué sección buscás presupuesto?</p>
          <div className='secciones'>
            {secciones.map(({ key, label, desc }) => (
              <button
                key={key}
                className={`seccion ${seccion === key ? 'activa' : ''}`}
                onClick={() => elegirSeccion(key)}
              >
                <span className='seccionLabel'>{label}</span>
                <span className='seccionDesc'>{desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Paso 2: seleccionar servicios */}
      {paso === 'servicios' && seccionActiva && (
        <div className='paso'>
          {resumen}
          <p className='pasoTitulo'>Seleccioná los servicios que necesitás</p>
          <ul className='listaServicios'>
            {cards[seccionActiva.key].map((serv) => (
              <li key={serv.id}>
                <button
                  type='button'
                  className={`servicioItem ${seleccionados.includes(serv.title) ? 'seleccionado' : ''}`}
                  onClick={() => toggleServicio(serv.title)}
                  aria-pressed={seleccionados.includes(serv.title)}
                >
                  <span className='servicioTitulo'>{serv.title}</span>
                  <span className='servicioDesc'>{serv.description}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className='navPasos'>
            <button className='btnVolver' onClick={() => setPaso('seccion')}>Volver</button>
            <button className='btnSiguiente' onClick={() => setPaso('datos')}>Siguiente</button>
          </div>
        </div>
      )}

      {/* Paso 3: datos de contacto */}
      {paso === 'datos' && seccionActiva && (
        <div className='paso'>
          {resumen}
          <p className='pasoTitulo'>Contanos tu situación</p>
          <div className='formulario'>
            <input
              type='text'
              className='campo'
              placeholder='Tu nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <textarea
              className='campo campoMensaje'
              placeholder='Contanos qué necesitás o cuál es la situación...'
              rows={3}
              maxLength={500}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <span className='contador'>{mensaje.length}/500</span>
          </div>
          <div className='navPasos'>
            <button className='btnVolver' onClick={() => setPaso('servicios')}>Volver</button>
            <button
              className='btnSiguiente'
              onClick={() => setPaso('resumen')}
              disabled={!datosOk}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Paso 4: resumen final y envío */}
      {paso === 'resumen' && seccionActiva && (
        <div className='paso'>
          <p className='pasoTitulo'>Revisá tu consulta</p>
          <div className='resumenFinal'>
            <p><b>Sección:</b> {seccionActiva.label}</p>
            <p>
              <b>Servicios:</b>{' '}
              {seleccionados.length > 0 ? seleccionados.join(', ') : 'Sin servicios seleccionados'}
            </p>
            <p><b>Nombre:</b> {nombre.trim()}</p>
            <p><b>Situación:</b> {mensaje.trim()}</p>
          </div>
          <div className='navPasos'>
            <button className='btnVolver' onClick={() => setPaso('datos')}>Volver</button>
            <button className='botonConsultar' onClick={consultar}>
              Consultar por presupuesto
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
