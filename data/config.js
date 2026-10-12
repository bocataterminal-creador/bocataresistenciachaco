/*
 * Datos editables del negocio.
 * Los valores vacíos son intencionales: no publicar datos no confirmados.
 */
window.BOCATA_CONFIG = {
  businessName: "Bocata",
  city: "Resistencia",
  province: "Chaco",
  country: "Argentina",

  // TODO: reemplazar por dato real.
  address: "",
  phone: "",
  whatsapp: "",
  instagramUrl: "",
  instagramHandle: "",
  googleMapsUrl: "",
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

  orderMessage: "Hola, quiero hacer un pedido en Bocata."
};
