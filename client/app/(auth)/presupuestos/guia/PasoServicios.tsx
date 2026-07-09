import cards from '@/public/json/cards.json'
import type { SeccionActiva } from './constants'
import NavPasos from './NavPasos'
import ResumenSel from './ResumenSel'

type Props = {
  seccionActiva: SeccionActiva
  seleccionados: string[]
  onToggle: (titulo: string) => void
  onVolver: () => void
  onSiguiente: () => void
}

// Paso 2: seleccionar servicios
export default function PasoServicios({
  seccionActiva,
  seleccionados,
  onToggle,
  onVolver,
  onSiguiente,
}: Props) {
  return (
    <div className='paso'>
      <ResumenSel label={seccionActiva.label} />
      <p className='pasoTitulo'>Seleccioná los servicios que necesitás</p>
      <ul className='listaServicios'>
        {cards[seccionActiva.key].map((serv) => (
          <li key={serv.id}>
            <button
              type='button'
              className={`servicioItem ${seleccionados.includes(serv.title) ? 'seleccionado' : ''}`}
              onClick={() => onToggle(serv.title)}
              aria-pressed={seleccionados.includes(serv.title)}
            >
              <span className='servicioTitulo'>{serv.title}</span>
              <span className='servicioDesc'>{serv.description}</span>
            </button>
          </li>
        ))}
      </ul>
      <NavPasos onVolver={onVolver}>
        <button className='btnSiguiente' onClick={onSiguiente}>Siguiente</button>
      </NavPasos>
    </div>
  )
}
