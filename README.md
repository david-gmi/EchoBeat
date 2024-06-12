# Clon completo de Spotify con el enrutador de aplicación Next.js 13.4: React, Tailwind, Supabase, PostgreSQL, Stripe

Para DEMO, use [Tarjetas de prueba Stripe](https://stripe.com/docs/testing)

Este es un repositorio para un clon completo de Spotify con el enrutador de aplicación Next.js 13.4: React, Tailwind, Supabase, PostgreSQL, Stripe

Características clave:

- Carga de canciones
- Integración de rayas
- Diseño Tailwind para una interfaz de usuario elegante
- Animaciones de viento de cola y efectos de transición.
- Capacidad de respuesta total para todos los dispositivos
- Autenticación de credenciales con Supabase
- Integración de autenticación de Github
- Carga de archivos e imágenes utilizando el almacenamiento Supabase
- Validación y manejo de formularios de cliente usando react-hook-form
- Manejo de errores del servidor con reaccionar-tostada
- Reproducir audio de la canción
- Sistema de favoritos
- Sistema de listas de reproducción / canciones que me gustan
- Componente de reproductor avanzado
- Integración de pagos recurrentes de Stripe
- Cómo escribir rutas POST, GET y DELETE en controladores de rutas (app/api)
- Cómo recuperar datos en los componentes de React del servidor accediendo directamente a la base de datos (¡SIN API! ¡Como Magic!)
- Manejo de relaciones entre componentes Server y Child en un entorno de tiempo real.
- Cancelación de suscripciones a Stripe

### Requisitos previos

**Versión del nodo 14.x**

### Instalar paquetes

```npm
npm i
```

### Configurar archivo .env


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Agregar tablas SQL
Utilice el archivo `database.sql`, cree canciones y la tabla de canciones favoritas

### Inicie la aplicación

```npm
npm run dev
```

## Comandos disponibles

Ejecutar comandos con npm `npm run [command]`

| comando         | descriptión                                          |
| :-------------- | :----------------------------------------------------|
| `dev`           | Inicia una instancia de desarrollo de la aplicación. |

##Genere tipos desde supabase: https://supabase.com/docs/guides/api/rest/generating-types
