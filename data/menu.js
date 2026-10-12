/*
 * Contenido demostrativo. TODO: reemplazar productos, promociones y precios por datos reales.
 * Los campos ingredients, variants, sizes, extras, promotion y stock quedan previstos para fases futuras.
 */
window.MENU_CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "bocatas", label: "Bocatas" },
  { id: "hamburguesas", label: "Hamburguesas" },
  { id: "compartir", label: "Para compartir" },
  { id: "papas", label: "Papas" },
  { id: "bebidas", label: "Bebidas" },
  { id: "postres", label: "Postres" }
];

window.MENU_DATA = [
  {
    id: "demo-bocata-especial",
    name: "Bocata Especial",
    description: "Descripción provisoria del producto y sus ingredientes principales.",
    category: "bocatas",
    price: "$ --",
    image: "assets/images/product-bocata.svg",
    imageAlt: "Imagen provisoria para Bocata Especial",
    available: true,
    featured: true,
    tag: "Favorito",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-bocata-clasico",
    name: "Bocata Clásico",
    description: "Descripción provisoria para presentar una segunda opción de bocata.",
    category: "bocatas",
    price: "$ --",
    image: "assets/images/product-bocata.svg",
    imageAlt: "Imagen provisoria para Bocata Clásico",
    available: true,
    featured: false,
    tag: "",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-hamburguesa-casa",
    name: "Hamburguesa de la Casa",
    description: "Combinación provisoria para mostrar nombre, detalle y precio.",
    category: "hamburguesas",
    price: "$ --",
    image: "assets/images/product-burger.svg",
    imageAlt: "Imagen provisoria para Hamburguesa de la Casa",
    available: true,
    featured: true,
    tag: "De la casa",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-hamburguesa-doble",
    name: "Hamburguesa Doble",
    description: "Producto demostrativo sujeto a confirmación del menú definitivo.",
    category: "hamburguesas",
    price: "$ --",
    image: "assets/images/product-burger.svg",
    imageAlt: "Imagen provisoria para Hamburguesa Doble",
    available: true,
    featured: false,
    tag: "",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-tabla-compartir",
    name: "Tabla para Compartir",
    description: "Selección provisoria pensada para presentar opciones grupales.",
    category: "compartir",
    price: "$ --",
    image: "assets/images/product-share.svg",
    imageAlt: "Imagen provisoria para Tabla para Compartir",
    available: true,
    featured: true,
    tag: "Para compartir",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-papas",
    name: "Papas Bocata",
    description: "Acompañamiento provisorio con espacio para variantes y adicionales.",
    category: "papas",
    price: "$ --",
    image: "assets/images/product-fries.svg",
    imageAlt: "Imagen provisoria para Papas Bocata",
    available: true,
    featured: true,
    tag: "Crujientes",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-bebida",
    name: "Bebida",
    description: "Presentación provisoria para bebidas y sus futuros tamaños.",
    category: "bebidas",
    price: "$ --",
    image: "assets/images/product-drink.svg",
    imageAlt: "Imagen provisoria para una bebida",
    available: true,
    featured: false,
    tag: "",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  },
  {
    id: "demo-postre",
    name: "Postre de la Casa",
    description: "Opción dulce provisoria para completar el recorrido del menú.",
    category: "postres",
    price: "$ --",
    image: "assets/images/product-dessert.svg",
    imageAlt: "Imagen provisoria para Postre de la Casa",
    available: true,
    featured: true,
    tag: "Dulce",
    ingredients: [], variants: [], sizes: [], extras: [], promotion: null, stock: null
  }
];

window.PROMO_DATA = [
  { id: "demo-promo-dia", name: "Promo del día", description: "Combinación provisoria para destacar una oportunidad diaria.", price: "$ --", previousPrice: "", tag: "Del día", image: "assets/images/promo-01.svg", available: true },
  { id: "demo-combo-dos", name: "Combo para dos", description: "Estructura lista para comunicar contenido, condiciones y vigencia.", price: "$ --", previousPrice: "$ --", tag: "Para compartir", image: "assets/images/promo-02.svg", available: true },
  { id: "demo-combo-familiar", name: "Combo familiar", description: "Promoción provisoria con lugar para todos los detalles reales.", price: "$ --", previousPrice: "", tag: "En familia", image: "assets/images/promo-03.svg", available: true },
  { id: "demo-promo-noche", name: "Promo noche", description: "Ejemplo de promoción asociada a una franja horaria.", price: "$ --", previousPrice: "", tag: "Noche", image: "assets/images/promo-04.svg", available: true }
];

window.GALLERY_DATA = [
  { src: "assets/images/gallery-01.svg", alt: "Espacio reservado para una fotografía de un plato de Bocata", caption: "Platos que invitan" },
  { src: "assets/images/gallery-02.svg", alt: "Espacio reservado para una fotografía del local de Bocata", caption: "Nuestro espacio" },
  { src: "assets/images/gallery-03.svg", alt: "Espacio reservado para una fotografía de cocina en Bocata", caption: "Detrás de cada pedido" },
  { src: "assets/images/gallery-04.svg", alt: "Espacio reservado para una fotografía de un encuentro en Bocata", caption: "Momentos para compartir" },
  { src: "assets/images/gallery-05.svg", alt: "Espacio reservado para una fotografía de un producto de Bocata", caption: "Hecho para disfrutar" },
  { src: "assets/images/gallery-06.svg", alt: "Espacio reservado para una fotografía de detalles de Bocata", caption: "Detalles de la casa" }
];
