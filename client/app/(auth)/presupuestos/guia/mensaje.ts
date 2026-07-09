import { WHATSAPP, type SeccionActiva } from './constants'

// Une los items en lenguaje natural: "A, B y C"
const unirNatural = (items: string[]) =>
  items.length <= 1
    ? items.join('')
    : `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`

type Datos = {
  nombre: string
  seccion: SeccionActiva
  seleccionados: string[]
  mensaje: string
}

// Arma el link de WhatsApp con un mensaje humano y natural
export function construirUrlWhatsapp({ nombre, seccion, seleccionados, mensaje }: Datos) {
  const seccionTexto = seccion.label.toLowerCase()

  let saludo = `¡Hola! Soy ${nombre.trim().toUpperCase()} y me gustaría pedir un presupuesto para ${seccionTexto}.`
  if (seleccionados.length > 0) {
    const servicios = unirNatural(seleccionados.map((s) => s.toUpperCase()))
    saludo += ` Me interesan estos servicios: ${servicios}.`
  }

  const lineas = [saludo, '', mensaje.trim(), '', '¡Muchas gracias!']
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`
}
