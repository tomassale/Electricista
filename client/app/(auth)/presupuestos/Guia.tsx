'use client'

import { useState } from 'react'
import { type Paso, type Seccion, secciones } from './guia/constants'
import { construirUrlWhatsapp } from './guia/mensaje'
import PasoSeccion from './guia/PasoSeccion'
import PasoServicios from './guia/PasoServicios'
import PasoDatos from './guia/PasoDatos'
import PasoResumen from './guia/PasoResumen'

export default function Guia() {
  const [paso, setPaso] = useState<Paso>('seccion')
  const [seccion, setSeccion] = useState<Seccion | null>(null)
  const [seleccionados, setSeleccionados] = useState<string[]>([])
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const seccionActiva = secciones.find((s) => s.key === seccion)
  const datosOk = Boolean(nombre.trim() && mensaje.trim())

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

  const consultar = () => {
    if (!seccionActiva || !datosOk) return
    const url = construirUrlWhatsapp({ nombre, seccion: seccionActiva, seleccionados, mensaje })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='guia'>
      {paso === 'seccion' && (
        <PasoSeccion seccion={seccion} onElegir={elegirSeccion} />
      )}

      {paso === 'servicios' && seccionActiva && (
        <PasoServicios
          seccionActiva={seccionActiva}
          seleccionados={seleccionados}
          onToggle={toggleServicio}
          onVolver={() => setPaso('seccion')}
          onSiguiente={() => setPaso('datos')}
        />
      )}

      {paso === 'datos' && seccionActiva && (
        <PasoDatos
          seccionActiva={seccionActiva}
          nombre={nombre}
          setNombre={setNombre}
          mensaje={mensaje}
          setMensaje={setMensaje}
          datosOk={datosOk}
          onVolver={() => setPaso('servicios')}
          onSiguiente={() => setPaso('resumen')}
        />
      )}

      {paso === 'resumen' && seccionActiva && (
        <PasoResumen
          seccionActiva={seccionActiva}
          seleccionados={seleccionados}
          nombre={nombre}
          mensaje={mensaje}
          onVolver={() => setPaso('datos')}
          onConsultar={consultar}
        />
      )}
    </div>
  )
}
