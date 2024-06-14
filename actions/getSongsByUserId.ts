import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  // Obtener el usuario de manera asíncrona
  const { data: userResponse, error: userError } = await supabase.auth.getUser();

  // Manejar errores al obtener el usuario
  if (userError) {
    console.error("Error al obtener el usuario:", userError.message);
    return [];
  }

  // Extraer el usuario de la respuesta
  const user = userResponse?.user;

  if (!user) {
    console.log("No hay sesión de usuario disponible.");
    return [];
  }

  // Obtener canciones del usuario usando su ID
  const { data: songsData, error: songsError } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', user.id)  // Acceder a user.id correctamente
    .order('created_at', { ascending: false });

  // Manejar errores al obtener las canciones
  if (songsError) {
    console.error("Error al obtener canciones:", songsError.message);
    return [];
  }

  // Retornar los datos de canciones, asegurándose que sea del tipo Song[]
  return songsData || [];
};
