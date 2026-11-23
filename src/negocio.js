// Datos del concesionario. Es lo único que cambia de un cliente a otro, junto con:
//   - src/diseno2/contenido.js  (textos de la web: servicios, preguntas, portada…)
//   - public/img/marca/         (logo e iconos) y public/img/v2/ (fotos de las secciones)
//   - src/data/coches.json      (stock inicial: solo se carga en una base de datos nueva)
// Plantilla de concesionarios de NeumorStudio. Cliente: LACAR Automóviles (Alaquàs, València).

export const NEGOCIO = {
  nombre: 'LACAR Automóviles',
  // dominio propio sin https ni www (p. ej. 'lacarautomoviles.es'). Vacío = todavía sin dominio: la web sale como «provisional»
  // y todas sus direcciones llevan noindex para que Google no indexe la dirección técnica.
  // lacarautomoviles.es sigue en Arbicars: se pone aquí el día que se conecte el dominio, no antes.
  dominio: '',
  provisional: 'https://lacar.vercel.app',

  telefono: '+34602622790',
  telefonoBonito: '602 62 27 90',
  whatsapp: '34602622790',
  email: 'lacarautomoviles@gmail.com',

  // dirección que se ve en la web (orientativa, para saber dónde ver los coches) y domicilio completo del aviso legal
  direccion: 'Carrer Sant Ramon, 7 · Alaquàs',
  domicilio: 'Carrer Sant Ramon, 7, 46970 Alaquàs, València',
  // solo calle y número, sin la ciudad: es lo que va en los datos para Google (streetAddress). Vacío = se usa «direccion».
  calle: 'Carrer Sant Ramon, 7',
  localidad: 'Alaquàs',
  provincia: 'València',
  codigoPostal: '46970',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Carrer%20Sant%20Ramon%207%2C%2046970%20Alaqu%C3%A0s',
  // lo que dice su web de Arbicars: de lunes a sábado de 10:00 a 20:00, domingos cerrado
  horario: 'De lunes a sábado, de 10:00 a 20:00',
  horarioLd: ['Mo-Sa 10:00-20:00'],

  // Titular legal (nombre y apellidos o razón social) y NIF para el aviso legal. Vacío = sale el nombre comercial,
  // como en su web de Arbicars. Se rellena cuando el dueño dé los datos que quiere en el aviso legal.
  titular: '',
  nif: '',

  lema: 'Calidad y celeridad en cada gestión',
  // cómo se nombra al dueño en el panel («Contraseña del dueño», «Has entrado como Dueño»)
  dueno: 'el dueño',
  duenoNombre: 'Dueño',

  logo: '/img/marca/logo.webp',
  // cómo se escribe la marca al lado del logo en la cabecera: [parte blanca, parte de color]
  marca: ['LACAR', 'Automóviles'],

  // Avisos por correo de cada formulario (Resend, si está RESEND_API_KEY). El remitente tiene que ser de un
  // dominio verificado en la cuenta de Resend: el de NeumorStudio sirve para todos los clientes.
  remitente: 'LACAR Automóviles web <avisos@neumorstudio.com>',
  // La cuenta de Resend es compartida con otros proyectos (la peluquería manda ahí sus citas, 100 correos al día en
  // el plan gratuito). Pasado este tope, los mensajes siguen llegando al panel y al móvil, pero no por correo.
  topeCorreosDia: 20,

  // Lo que sale oculto en una web nueva (el dueño lo enciende en Panel → Tu web).
  ocultosIniciales: ['boton:reserva'],
};

/** Dirección pública de la web: el dominio propio si lo hay; si no, la provisional. */
export const SITIO = NEGOCIO.dominio ? `https://${NEGOCIO.dominio}` : NEGOCIO.provisional;
/** Hosts «buenos» (los que se indexan). Sin dominio, ninguno: todo lleva noindex. */
export const HOSTS_PROPIOS = NEGOCIO.dominio ? [NEGOCIO.dominio, `www.${NEGOCIO.dominio}`] : [];
export const WHATSAPP_URL = `https://wa.me/${NEGOCIO.whatsapp}`;
/** Nombre del sitio como se ve en textos legales y pies («LACAR Automóviles» o el dominio si lo hay). */
export const NOMBRE_WEB = NEGOCIO.dominio || NEGOCIO.nombre;
