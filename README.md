# LACAR Automóviles — web y panel

Web del concesionario **LACAR Automóviles** (Alaquàs, València), con su panel de administración en `/admin`. Sale de la
**plantilla de concesionarios de NeumorStudio** (NeumorStudio/hrcar, el mismo código que H & R Car y LIDIAUTO); los
textos, el logo, las fotos y el stock inicial vienen de su web de Arbicars. De momento sin dominio: se ve en
**lacar.vercel.app** (con `noindex`). `lacarautomoviles.es` sigue en Arbicars y no se toca hasta que se decida.

## Qué cambia de un cliente a otro

| Archivo | Qué lleva |
| --- | --- |
| `src/negocio.js` | Nombre, dominio, teléfono, WhatsApp, email, zona, horario, titular y NIF (aviso legal), remitente de correo, tope diario de correos, lo que sale oculto al principio |
| `src/diseno2/contenido.js` | Textos de la web: portada, servicios, preguntas frecuentes, encargo, financiación, vende tu coche |
| `public/img/marca/` y los iconos de `public/` y `public/admin/` | Logo, favicon e iconos del panel |
| `public/img/v2/` y `public/img/servicios/` | Fotos de serie de las secciones (las de `v2` las cambia el dueño desde el panel: Ajustes → Imágenes de la web) |
| `public/img/stock/` | Fotos de los coches del stock inicial (las que suba el dueño van a KV) |
| `src/data/coches.json` | Stock inicial (solo se carga en una base de datos nueva) |
| `src/lib/marca.js`, `src/lib/secciones.js`, `src/lib/imagenes-web.js` | Garantía por defecto (12 meses), nombres de los bloques de la portada y de las fotos en el panel |

Para un concesionario nuevo: copiar este repo, cambiar esos archivos y publicar.

## Cómo está montado

- **Cloudflare Pages** (proyecto `lacar`): la web y el panel. Datos en **D1** (`lacar`, binding `DB`) y fotos que
  sube el dueño en **KV** (`lacar-fotos`, binding `FOTOS`). Las tablas se crean solas la primera vez.
- **Vercel** (proyecto `lacar`, repo NeumorStudio/lacar-entrada con el `vercel/vercel.json` de aquí): la entrada
  pública. Reenvía cada petición a `lacar.pages.dev`, para que los bloqueos de IPs de Cloudflare que LaLiga ordena los días de partido no dejen la web
  sin cargar. Las cuentas son las de NeumorStudio.
- **Dominio**: ninguno todavía. Sin dominio
  (`NEGOCIO.dominio` vacío) todas las direcciones llevan `noindex` y el mapa del sitio no se anuncia; al conectar uno:
  ponerlo en `src/negocio.js`, publicar y añadirlo al proyecto de Vercel.
- **Formularios**: se guardan en el panel (Mensajes), avisan al móvil del dueño (si activa los avisos) y, con Resend
  configurado, le llegan por correo. La cuenta de Resend es compartida con la peluquería: por eso hay un **tope de
  correos al día** (`NEGOCIO.topeCorreosDia`); pasado el tope los mensajes siguen entrando en el panel y en el móvil.
- **«Reservar por 100 €»** sale **oculto** al principio (`NEGOCIO.ocultosIniciales`). El dueño lo enciende en Tu web.
- **Captaciones** (`/admin/captaciones`): coches de particulares que el concesionario vende por ellos (el dueño cobra un
  precio neto y la diferencia es la comisión). Ficha con los datos y fotos del anuncio (coches.net se lee entero; si
  bloquea, lo del enlace), **tasación por coches parecidos** en coches.net y AutoScout24 (`src/lib/tasacion.js`),
  comisión, **contrato con firma por enlace** (`/firmar/<token>`: el vendedor pone su DNI y firma con el dedo; se guarda
  el registro con fecha, IP, navegador y huella SHA-256) y paso al inventario con todo puesto. La plantilla del
  contrato, los datos de la empresa y la firma del dueño están en Ajustes → Contratos; los valores por defecto salen de
  `NEGOCIO` (`src/lib/marca.js`). El PDF lo monta el navegador (`dist/js/contrato-pdf.js`, pdf-lib): en el Worker
  gastaría más CPU de la que da el plan gratuito. Los correos de los contratos no cuentan para el tope diario.

Variables del proyecto de Pages (opcionales, para el correo):

| Variable | Para qué |
| --- | --- |
| `RESEND_API_KEY` | Clave de Resend **solo de envío**, con nombre propio (p. ej. «lacar produccion (solo envio)») |
| `CORREO_DESTINO` | A quién llegan los avisos. Por defecto `NEGOCIO.email`; el dueño lo cambia en Ajustes |
| `CORREO_REMITENTE` | Remitente verificado en Resend. Por defecto `NEGOCIO.remitente` (un buzón de neumorstudio.com) |

## Publicar

**Automático**: cada push a `main` lo publica GitHub Actions (`.github/workflows/publicar.yml`) en el proyecto de Pages
de la cuenta de NeumorStudio. Usa el secreto `CLOUDFLARE_API_TOKEN` de la organización NeumorStudio de GitHub, que
solo llega a repos públicos con el plan gratuito: si este repo se hace privado, hay que ponerlo como secreto del repo.

A mano, si hace falta:

```bash
npm ci
npm run build      # deja la web en dist/ con el Worker en un solo archivo (dist/_worker.js)
```

Después, en Cloudflare → Workers y Pages → `lacar` → *Create deployment* → subir la carpeta `dist` (o un zip con su
contenido), o `npx wrangler pages deploy dist --project-name lacar` **sin** `wrangler.toml` (ese archivo es solo para
probar en local: con él, wrangler toma sus IDs «local» por buenos y la publicación falla).

## Primer acceso al panel

La primera vez que se abre `/admin` pide crear la contraseña: la pone NeumorStudio nada más publicar. Después:

- **Acceso de soporte (NeumorStudio)**: en Cloudflare → Workers y Pages → `lacar` → Settings → Variables and Secrets,
  un secreto `CLAVE_SOPORTE` (mínimo 10 caracteres; hace falta publicar otra vez para que lo vea). Al entrar en el
  panel con esa contraseña, queda activado como **Soporte**. No hace falta saber la del dueño. Si se cambia el secreto
  (y se publica), la próxima vez que se entre se usa el nuevo; si se cambia desde el panel, se respeta mientras el
  secreto siga igual.
- **Enlace para el dueño**: entrando como Soporte, Ajustes → «Contraseña del dueño, sin pasársela» crea un enlace de un
  solo uso para que el dueño ponga su contraseña por WhatsApp. Al usarlo se cierran las demás sesiones.
- **Lo que ve el dueño**: en Ajustes solo «Acceso de NeumorStudio», que le dice que el estudio tiene contraseña propia y
  le deja quitar ese acceso (y volver a permitirlo). Mientras lo tenga quitado, `CLAVE_SOPORTE` no vuelve a activarlo.

## En local

```bash
npm run build && npx wrangler pages dev dist   # D1 y KV locales en http://127.0.0.1:8788
```
