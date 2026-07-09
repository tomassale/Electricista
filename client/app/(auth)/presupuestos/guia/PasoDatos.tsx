import type { SeccionActiva } from './constants'
import NavPasos from './NavPasos'
import ResumenSel from './ResumenSel'

type Props = {
  seccionActiva: SeccionActiva
  nombre: string
  setNombre: (v: string) => void
  mensaje: string
  setMensaje: (v: string) => void
  datosOk: boolean
  onVolver: () => void
  onSiguiente: () => void
}

// Paso 3: datos de contacto
export default function PasoDatos({
  seccionActiva,
  nombre,
  setNombre,
  mensaje,
  setMensaje,
  datosOk,
  onVolver,
  onSiguiente,
}: Props) {
  return (
    <div className='paso'>
      <ResumenSel label={seccionActiva.label} />
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
      <NavPasos onVolver={onVolver}>
        <button className='btnSiguiente' onClick={onSiguiente} disabled={!datosOk}>
          Siguiente
        </button>
      </NavPasos>
    </div>
  )
}
