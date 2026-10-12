# BOCATA — sitio web estructural

Primera versión navegable del sitio oficial de Bocata, un local gastronómico de Resistencia, Chaco. Esta etapa valida arquitectura, recorrido, contenido, responsive e interacciones antes de incorporar la identidad visual, las fotografías y la información comercial definitivas.

El proyecto es estático: usa HTML5, CSS3 y JavaScript Vanilla, sin proceso de compilación ni dependencias. Puede abrirse localmente y publicarse directamente en Netlify.

## Estructura

```text
/
├── index.html              Estructura semántica y metadatos SEO
├── css/styles.css          Sistema visual, componentes y responsive
├── js/app.js               Renderizado, filtros, navegación y lightbox
├── data/config.js          Datos variables del negocio
├── data/menu.js            Categorías, productos, promos y galería
├── assets/
│   ├── icons/favicon.svg
│   └── images/             Placeholders reemplazables
├── netlify.toml            Configuración de publicación y cabeceras
└── README.md
```

## Cambiar la identidad visual

Los colores, tipografías, sombras y radios están centralizados al inicio de `css/styles.css`, dentro de `:root`. Para adaptar la identidad, modificá variables como:

```css
--color-primary: #24372f;
--color-secondary: #f5efe4;
--color-accent: #ed6b3a;
--color-background: #fbf8f2;
--color-surface: #ffffff;
--color-text: #1c211e;
```

El nombre y el isotipo tipográfico provisorio aparecen en `index.html`. Cuando esté listo el logo real, guardalo en `assets/logo/` y reemplazá el contenido de los enlaces `.brand` por una etiqueta `<img>` con texto alternativo.

## Cambiar fotografías

- Portada: reemplazá `assets/images/hero-placeholder.svg` conservando ese nombre, o cambiá la ruta de `.hero-media` en `css/styles.css`.
- Productos y promociones: cargá las imágenes en `assets/images/` y actualizá el campo `image` correspondiente en `data/menu.js`.
- Historia: reemplazá las rutas de las tres imágenes dentro de la sección `#bocata` en `index.html`.
- Galería: editá `GALLERY_DATA` en `data/menu.js`. Puede contener entre 6 y 12 elementos sin cambiar la lógica.
- Videos: editá `VIDEO_DATA` en `data/menu.js`. Los reproductores de Google Vids se cargan sólo cuando el visitante pulsa “Reproducir video”.

Para producción conviene usar imágenes WebP o AVIF optimizadas. Mantené `object-fit: cover` para evitar deformaciones.

## Cargar el menú real

Cada producto de `MENU_DATA` en `data/menu.js` sigue esta estructura:

```js
{
  id: "identificador-unico",
  name: "Nombre",
  description: "Descripción breve",
  category: "bocatas",
  price: "$ 0",
  image: "assets/images/producto.webp",
  imageAlt: "Descripción accesible de la fotografía",
  available: true,
  featured: false,
  tag: "Nuevo",
  ingredients: [],
  variants: [],
  sizes: [],
  extras: [],
  promotion: null,
  stock: null
}
```

- Para cambiar un precio, editá `price`.
- Para ocultar temporalmente un producto, usá `available: false`.
- Para mostrarlo en “Los favoritos”, usá `featured: true`.
- Para agregar o quitar categorías, editá `MENU_CATEGORIES` y luego asigná el mismo `id` a los productos.
- Los campos finales quedan previstos para las futuras fases, pero todavía no activan carrito ni stock.

Las promociones se editan en `PROMO_DATA` dentro del mismo archivo.

Las secciones Favoritos, Menú, Promos, Pedidos, Esto es Bocata, Videos, Galería y Reseñas se presentan como acordeones cerrados para mantener el recorrido inicial más compacto.

Las secciones `Esto es Bocata` y `Momentos Bocata` permanecen temporalmente ocultas mediante el atributo `hidden`; su contenido se conserva para reactivarlo más adelante.

## Completar los datos del negocio

Abrí `data/config.js` y reemplazá únicamente los campos confirmados:

```js
window.BOCATA_CONFIG = {
  address: "",
  phone: "",
  whatsapp: "",
  email: "",
  instagramUrl: "",
  instagramHandle: "",
  googleMapsUrl: "",
  googleReviewsUrl: "",
  openingHours: {}
};
```

El número de WhatsApp debe incluir código de país y área, sólo con dígitos. Ejemplo de formato (no es un dato de Bocata): `549XXXXXXXXXX`.

Mientras estos valores estén vacíos, los botones muestran un aviso y no abren enlaces inventados. La lógica automática “abierto/cerrado” está desactivada hasta contar con horarios definitivos.

## Ejecutar localmente

Puede abrirse `index.html` directamente. Para probarlo en condiciones similares a producción, es preferible usar un servidor estático desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Después visitá `http://localhost:8080`.

## Publicar en Netlify

1. Subí esta carpeta a un repositorio de GitHub.
2. En Netlify elegí **Add new site → Import an existing project**.
3. Conectá GitHub y seleccioná el repositorio.
4. No hace falta comando de build.
5. El directorio de publicación es `.` y ya está definido en `netlify.toml`.
6. Publicá el sitio.

Cada nuevo push a la rama configurada generará un despliegue automático. Antes de hacer público el dominio, completá los datos reales, las imágenes y los metadatos sociales.

## Alcance de esta versión

Incluye navegación sticky y móvil, menú dinámico con filtros, promociones, modalidades de pedido, sección institucional, galería con lightbox, opiniones provisorias, ubicación, horarios, accesos de contacto, botón flotante, SEO básico y estilos responsive.

No incluye carrito, checkout, pagos, base de datos, panel administrativo, gestión de stock ni lógica automática de horarios. La separación entre configuración, datos e interfaz deja esos pasos abiertos para futuras fases.

## Lista de control antes de publicar contenido real

- Reemplazar todos los comentarios `TODO` y precios `$ --`.
- Confirmar WhatsApp, Instagram, Google Maps y reseñas.
- Reemplazar todas las imágenes provisorias.
- Actualizar el logo, favicon, Open Graph y schema con datos definitivos.
- Probar navegación por teclado y dispositivos de 360, 390, 430, 768, 1024 y 1440 px.
- Revisar consola del navegador y enlaces externos.
