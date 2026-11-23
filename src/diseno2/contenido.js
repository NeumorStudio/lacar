// Textos de la web de LACAR Automóviles, tomados de su web de Arbicars (portada, servicios, preguntas frecuentes…).
// Las fotos de /img-web/ se cambian desde el panel (Imágenes de la web); las de /img/servicios/ son fijas.
// Pendiente de que lo confirme el dueño (venía así en su web de Arbicars): la inspección de 80 puntos, el informe
// Carfax, la «garantía oficial de 12 meses en motor» y que la garantía «se gestiona directamente con el fabricante».
import { NEGOCIO } from '../negocio.js';

const N = NEGOCIO.nombre;
const ZONA = NEGOCIO.localidad;

export const PORTADA = {
  title: `${N} · Coches de alta y media gama en ${ZONA}`,
  description: `${N}, concesionario de coches de alta y media gama en ${ZONA}, especializado en compraventa y gestión integral. Financiación, garantía e importación.`,
  antetitulo: `${N} · ${ZONA}`,
  h1: 'Descubre tu próximo coche con total confianza',
  entradilla: 'Amplio stock de marcas premium y segunda mano, con asesoramiento directo y elegante.',
  cifras: [['Garantizada', 'Calidad'], ['Rápida', 'Celeridad'], ['Clara', 'Transparencia']],
  stockAntetitulo: 'Nuestro stock',
  stockTitulo: 'Explora los modelos disponibles y elige el que se adapta a tu estilo',
  // cuando aún hay pocos coches: el aviso de «te lo buscamos» que tenía la web de Arbicars
  sinVerlo: { titulo: '¿No ves lo que buscas?', texto: 'Dinos modelo, presupuesto y preferencias. Te avisamos cuando encontremos algo que encaje perfectamente contigo.' },
  propuesta: {
    antetitulo: 'Ventaja real',
    titulo: `Conduce tranquilidad con ${N}`,
    texto: `En ${N} cada coche usado recibe una revisión exhaustiva y un trato transparente. Nos enfocamos en que encuentres el vehículo que se ajuste a tu estilo y presupuesto sin sorpresas.`,
    puntos: [
      'Inspección mecánica de 80 puntos antes de la entrega',
      'Garantía oficial de 12 meses en motor',
      'Informe Carfax gratuito para cada vehículo',
      'Financiación flexible sin intereses ocultos',
    ],
  },
  servicios: { antetitulo: 'Nuestros servicios', titulo: 'Todo lo que necesitas para comprar, financiar y disfrutar tu coche sin sorpresas' },
  importacion: {
    antetitulo: 'Importación a medida',
    titulo: 'Importación de vehículos',
    texto: 'Traemos los modelos que deseas directamente desde el extranjero, con gestión completa y sin sorpresas.',
  },
  nosotros: {
    antetitulo: 'Sobre nosotros',
    titulo: 'Pasión por los coches',
    parrafos: [
      'Desde el inicio hemos acompañado a cientos de conductores en la búsqueda del coche de segunda mano ideal, combinando años de experiencia con un conocimiento profundo del mercado local.',
      'Trabajamos con honestidad y cercanía, ofreciendo pruebas de conducción sin compromiso y un servicio posventa que prioriza la confianza y la satisfacción del cliente.',
    ],
  },
};

export const SERVICIOS = [
  { titulo: 'Financiación', texto: 'Planes a medida con condiciones claras y sin costes ocultos.', foto: '/img-web/financiacion.webp', enlace: '/finance' },
  { titulo: 'Gestión de venta', texto: 'Nos encargamos de todo el proceso, desde la tasación hasta la entrega al comprador.', foto: '/img-web/acompanamiento.webp', enlace: '/sell-your-car' },
  { titulo: 'Matriculación en España', texto: 'Tramitamos la documentación y la matriculación de forma rápida y sin complicaciones.', foto: '/img/servicios/matriculacion.webp', enlace: '/custom-order' },
  { titulo: 'Garantía', texto: 'Cobertura completa que protege tu inversión durante el tiempo que necesites.', foto: '/img-web/taller.webp' },
  { titulo: 'Importación', texto: 'Traemos el modelo que deseas desde el extranjero con gestión integral.', foto: '/img-web/importacion.webp', enlace: '/custom-order' },
  { titulo: 'Coches a la carta', texto: 'Personalizamos el vehículo según tus especificaciones antes de la entrega.', foto: '/img/servicios/a-la-carta.webp', enlace: '/custom-order' },
];

/** Preguntas de la portada. */
export const PREGUNTAS = [
  ['¿Qué marcas tenéis disponibles?', `En ${N} disponemos de un amplio catálogo que incluye BMW, Mercedes-Benz, Audi, Volvo, Lexus, Jaguar, Land Rover, Porsche y muchas más.`],
  ['¿Ofrecéis financiación?', 'Sí, contamos con planes de financiación a medida que se adaptan a tu situación y sin costes ocultos.'],
  ['¿Cómo funciona la importación de un coche?', 'Gestionamos todo el proceso: selección del modelo, trámites aduaneros, matriculación en España y entrega puerta a puerta.'],
  ['¿Qué incluye la garantía?', 'Nuestra garantía cubre los componentes principales del vehículo y se gestiona directamente con el fabricante.'],
];

export const PREGUNTAS_STOCK = [
  ['¿Puedo reservar un coche sin compromiso?', `En ${N} puedes reservar el vehículo que te interese y disponemos de un periodo de reserva para que lo pruebes.`],
  ['¿Los coches incluyen revisión completa?', 'Todos los vehículos pasan por una inspección y peritaje exhaustivo antes de ponerse a la venta.'],
  ['¿Ofrecéis entrega a domicilio?', 'Sí, contamos con servicio de entrega puerta a puerta en toda la zona de València.'],
];

export const PREGUNTAS_FICHA = [
  ['¿Puedo probar el coche antes de comprarlo?', 'Sí. Escríbenos por WhatsApp o llámanos y quedamos para que lo veas y lo pruebes sin compromiso.'],
  ['¿Aceptáis mi coche como parte de pago?', 'Sí. Lo tasamos y descontamos su valor del precio final.'],
  ['¿Tiene garantía?', 'Sí. La garantía cubre los componentes principales del vehículo.'],
];

export const PREGUNTAS_CONTACTO = [
  ['¿Cuál es vuestro horario de atención?', NEGOCIO.horario + '. Los domingos, cerrado.'],
  ['¿Puedo contactar por WhatsApp?', `Sí, puedes escribirnos al ${NEGOCIO.telefonoBonito} y te responderemos rápidamente.`],
  [`¿Dónde está ${N}?`, `En ${NEGOCIO.direccion}. Escríbenos antes de venir y quedamos para que veas el coche.`],
];

export const ENCARGO = {
  h1: 'Encargo a medida',
  texto: 'Solicita el coche que siempre has querido, importado y preparado a tu gusto.',
  pasos: [
    ['Selección del modelo', 'Nos indicas la marca, el modelo y el equipamiento que deseas.'],
    ['Trámites de importación', 'Gestionamos la compra internacional, las aduanas y la matriculación en España.'],
    ['Entrega y puesta a punto', 'Recibes el coche en tu domicilio con una revisión completa y la documentación lista.'],
  ],
  preguntas: [
    ['¿Cuánto tarda un encargo?', 'El plazo depende del origen del vehículo, pero trabajamos para que la entrega sea lo más rápida posible.'],
    ['¿Puedo personalizar el coche?', 'Sí, ofrecemos opciones de personalización completa antes de la importación.'],
    ['¿Qué documentación necesito?', 'Solo necesitas tu DNI y una autorización de compra; nosotros nos encargamos del resto.'],
  ],
};

export const VENDE = {
  h1: 'Vende tu coche fácilmente',
  texto: 'Tasa tu coche gratis y consigue la mejor oferta del mercado. Nos cuentas cómo es, nos mandas unas fotos y te damos una valoración.',
  preguntas: [
    ['¿Cuánto tardáis en tasar mi coche?', 'Normalmente recibes una valoración inicial en menos de 24 horas laborables tras enviar el formulario.'],
    ['¿Es necesario que el coche esté libre de cargas?', 'No necesariamente: podemos encargarnos de cancelar reservas de dominio o deudas pendientes si el valor del coche lo cubre.'],
  ],
};

export const FINANCIACION = {
  h1: 'Financiación a tu medida',
  texto: 'Te ofrecemos soluciones de financiación flexibles y transparentes para que conduzcas tu coche sin preocupaciones. Calcula tu cuota y, si te encaja, pídenos el estudio.',
  ventajas: ['Tipos de interés competitivos', 'Plazos adaptados a tu capacidad de pago', 'Gestión integral sin papeleo adicional'],
  documentos: ['DNI / NIE en vigor', 'Última nómina', 'Vida laboral'],
  preguntas: [
    ['¿Qué requisitos necesito para financiar?', 'Evaluamos tu capacidad crediticia y solicitamos documentación básica como el DNI, la nómina y la vida laboral.'],
    ['¿Puedo combinar la financiación con mi coche usado?', 'Sí, aceptamos la tasación de tu vehículo como parte del pago inicial.'],
    ['¿Hay comisiones ocultas?', 'No, todas las condiciones son claras desde el primer momento y aparecen en la simulación.'],
  ],
};

export const SERVICIOS_PAGINA = {
  h1: 'Todo lo que necesitas para comprar, financiar y disfrutar tu coche',
  texto: `Descubre todo lo que ${N} pone a tu disposición para una compra sin complicaciones.`,
  preguntas: [
    ['¿Cómo funciona la gestión de venta?', 'Nos ocupamos de la tasación, la publicidad, la negociación y la entrega del coche al nuevo propietario.'],
    ['¿Qué incluye la garantía?', 'Cubre los componentes principales del vehículo y se gestiona directamente con el fabricante, sin costes adicionales.'],
    ['¿Puedo combinar varios servicios?', 'Sí, diseñamos paquetes personalizados que incluyen financiación, importación y entrega puerta a puerta.'],
  ],
};

/** Frase de la garantía en la ficha de cada coche. */
export const garantiaFicha = (meses) =>
  `Revisado antes de la entrega y con garantía de ${meses || 12} meses que cubre los componentes principales.`;
