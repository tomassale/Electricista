type Props = {
  onVolver: () => void
  children: React.ReactNode // botón de acción (Siguiente / Consultar)
}

// Barra de navegación: botón Volver + acción a la derecha
export default function NavPasos({ onVolver, children }: Props) {
  return (
    <div className='navPasos'>
      <button className='btnVolver' onClick={onVolver}>Volver</button>
      {children}
    </div>
  )
}
