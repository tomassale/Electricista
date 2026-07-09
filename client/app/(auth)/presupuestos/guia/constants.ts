export const WHATSAPP = '541159098126'

export const secciones = [
  { key: 'hogar', label: 'Hogar', desc: 'Instalaciones y reparaciones en tu casa' },
  { key: 'comercio', label: 'Comercio', desc: 'Servicios eléctricos para tu comercio' },
  { key: 'tramites', label: 'Trámites', desc: 'Gestiones y documentación eléctrica' },
] as const

export type Seccion = (typeof secciones)[number]['key']
export type SeccionActiva = (typeof secciones)[number]
export type Paso = 'seccion' | 'servicios' | 'datos' | 'resumen'
