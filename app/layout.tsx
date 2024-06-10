import { Figtree } from 'next/font/google'

import getSongsByUserId from '@/actions/getSongsByUserId'
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import Player from '@/components/Player'

import './globals.css'

// Se define la fuente Figtree con el subconjunto de caracteres latinos
const font = Figtree({ subsets: ['latin'] })

// Metadatos de la aplicación
export const metadata = {
  title: 'EchoBeat App',
  description: 'Música que suena más cerca',
}

export const revalidate = 0;

// Componente principal que envuelve la aplicación
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Se obtienen los productos activos con precios
  const products = await getActiveProductsWithPrices();
  // Se obtienen las canciones del usuario
  const userSongs = await getSongsByUserId();

  return (
    <html lang="es"> {/* Se establece el idioma del documento */}
      <body className={font.className}> {/* Se aplica la clase de la fuente */}
        <ToasterProvider /> {/* Proveedor para mostrar notificaciones */}
        <SupabaseProvider> {/* Proveedor de Supabase */}
          <UserProvider> {/* Proveedor de usuario */}
            <ModalProvider products={products} /> {/* Proveedor de modal con los productos activos */}
            <Sidebar songs={userSongs}> {/* Barra lateral con las canciones del usuario */}
              {children} {/* Contenido principal */}
            </Sidebar>
            <Player /> {/* Reproductor de música */}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
