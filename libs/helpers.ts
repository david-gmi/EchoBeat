import { Price } from '@/types';

// Función para obtener la URL base del sitio web.
export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Establece esta URL como la URL de tu sitio en el entorno de producción.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Establecido automáticamente por Vercel.
    'http://localhost:3000/';
  // Asegúrate de incluir `https://` cuando no sea localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Asegúrate de incluir la barra diagonal al final.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

// Función para realizar una solicitud POST.
export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log('Publicando,', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error en postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

// Función para convertir segundos en formato de fecha y hora.
export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Inicio del epoch Unix.
  t.setSeconds(secs);
  return t;
};
