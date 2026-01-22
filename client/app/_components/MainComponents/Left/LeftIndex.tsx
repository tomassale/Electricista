export default function LeftIndex() {
  return (    
    <div className='texto'>
      <p>
        <strong>Profesional matriculado con años de experiencia:</strong> responsable, rápido y eficiente. 
        Resultados duraderos y de calidad. <strong>Solicita tu presupuesto sin compromiso gratis.</strong>
      </p>
      <div className='botones'>
        <a 
          style={{backgroundColor: "#60D669"}} 
          href='https://wa.me/+541159638765?text=Hola' 
          target="_blank" 
          aria-label="Mensaje por Whatsapp">
            Whatsapp
        </a>
        <a 
          style={{backgroundColor: "#EA5A47"}} 
          href='tel:+541159638765' 
          aria-label="Llamar por teléfono">
            Llamar
        </a>
      </div>
    </div>
  )
}