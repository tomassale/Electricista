import ContactButtons from '@/app/_components/ContactButtons'

const valores = [
  {
    title: 'Matriculado',
    text: 'Electricista habilitado y matriculado. Trabajos que cumplen la normativa vigente y las mediciones RES 900/15.',
  },
  {
    title: 'Experiencia',
    text: 'Años de trabajo en obra e instalaciones residenciales y comerciales, con criterio técnico en cada intervención.',
  },
  {
    title: 'Urgencias',
    text: 'Respuesta rápida ante cortocircuitos, fugas y cortes. Llegamos en tiempo y forma, eficientes y pragmáticos.',
  },
  {
    title: 'Garantía',
    text: 'Trabajo prolijo, materiales de calidad y resultados duraderos. Presupuesto claro y sin sorpresas.',
  },
]

export default function Nosotros() {
  return (
    <div className='sobreNosotros'>

      <div className='contenido'>
        <p className='intro'>
          Somos un servicio de electricidad matriculado con base en Zona Oeste del Gran Buenos Aires.
          Combinamos <strong>precisión técnica</strong>, <strong>seguridad</strong> y <strong>compromiso</strong> para
          resolver desde una urgencia hasta la instalación completa de tu hogar o comercio. Cada proyecto se aborda
          con diagnóstico previo, materiales normalizados y un acabado prolijo que perdura en el tiempo.
        </p>

        <div className='valores'>
          {valores.map(({ title, text }) => (
            <article key={title} className='valor'>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <ContactButtons />
      </div>
    </div>
  )
}
