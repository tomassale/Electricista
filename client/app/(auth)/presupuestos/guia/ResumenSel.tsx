// Resumen de lo elegido, visible durante el proceso
export default function ResumenSel({ label }: { label: string }) {
  return (
    <div className='resumenSel'>
      <span className='resumenItem'>
        <b>Sección:</b> {label}
      </span>
    </div>
  )
}
