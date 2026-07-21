// Datos de contacto del electricista, centralizados en un único lugar.
// El número de WhatsApp lleva el 9 de celular; el de llamada no.
export const WHATSAPP_NUMERO = '5491159098126'
export const TELEFONO = '+541159098126'

// Colores de marca de cada canal de contacto.
export const COLOR_WHATSAPP = '#60D669'
export const COLOR_LLAMADA = '#EA5A47'

// Link de WhatsApp, opcionalmente con un mensaje prellenado.
export const urlWhatsapp = (mensaje?: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ''}`

// Link para iniciar una llamada telefónica.
export const urlLlamada = () => `tel:${TELEFONO}`
