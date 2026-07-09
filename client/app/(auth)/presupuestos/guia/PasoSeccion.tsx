import { secciones, type Seccion } from './constants'

type Props = {
  seccion: Seccion | null
  onElegir: (key: Seccion) => void
}

// Paso 1: elegir la sección
export default function PasoSeccion({ seccion, onElegir }: Props) {
  return (
    <div className='paso'>
      <p className='pasoTitulo'>¿Para qué sección buscás presupuesto?</p>
      <div className='secciones'>
        {secciones.map(({ key, label, desc }) => (
          <button
            key={key}
            className={`seccion ${seccion === key ? 'activa' : ''}`}
            onClick={() => onElegir(key)}
          >
            <span className='seccionLabel'>{label}</span>
            <span className='seccionDesc'>{desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
