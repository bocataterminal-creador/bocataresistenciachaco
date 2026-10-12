/*
 * Datos editables del negocio.
 * Los valores vacíos son intencionales: no publicar datos no confirmados.
 */
window.BOCATA_CONFIG = {
  businessName: "Bocata",
  city: "Resistencia",
  province: "Chaco",
  country: "Argentina",

  address: "Av. M. Moreno 89, H3500BAN Resistencia, Chaco, Argentina",
  phone: "+54 9 362 405-6624",
  whatsapp: "5493624056624",

  // TODO: reemplazar por dato real.
  instagramUrl: "",
  instagramHandle: "",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20M.%20Moreno%2089%2C%20H3500BAN%20Resistencia%2C%20Chaco%2C%20Argentina",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Av.%20M.%20Moreno%2089%2C%20H3500BAN%20Resistencia%2C%20Chaco%2C%20Argentina&output=embed",
  googleReviewsUrl: "",

  // TODO: reemplazar por horarios reales. La lógica “abierto ahora” permanece desactivada.
  openingHours: {
    Lunes: "--",
    Martes: "--",
    Miércoles: "--",
    Jueves: "--",
    Viernes: "--",
    Sábado: "--",
    Domingo: "--"
  },

  orderMessage: "Hola, quiero realizar un pedido en Bocata."
};
