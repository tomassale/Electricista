import type { SeccionActiva } from './constants'
import NavPasos from './NavPasos'

type Props = {
  seccionActiva: SeccionActiva
  seleccionados: string[]
  nombre: string
  mensaje: string
  onVolver: () => void
  onConsultar: () => void
}

// Paso 4: resumen final y envío
export default function PasoResumen({
  seccionActiva,
  seleccionados,
  nombre,
  mensaje,
  onVolver,
  onConsultar,
}: Props) {
  return (
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
      <NavPasos onVolver={onVolver}>
        <button className='botonConsultar' onClick={onConsultar}>
          Consultar por presupuesto
        </button>
      </NavPasos>
    </div>
  )
}
