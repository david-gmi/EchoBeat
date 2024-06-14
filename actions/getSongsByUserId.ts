import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

const getSongsByUserId = async (): Promise<Song[]> => {
  try {
    const supabase = createServerComponentClient({
      cookies: cookies
    });

    // Obtener el usuario de manera asíncrona
    const { user, error: userError } = await supabase.auth.getUser();

    // Manejar errores al obtener el usuario
    if (userError) {
      throw new Error(`Error al obtener el usuario: ${userError.message}`);
    }

    if (!user) {
      console.log("No hay sesión de usuario disponible.");
      return [];
    }

    // Obtener canciones del usuario usando su ID
    const { data: songsData, error: songsError } = await supabase
      .from('songs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    // Manejar errores al obtener las canciones
    if (songsError) {
      throw new Error(`Error al obtener canciones: ${songsError.message}`);
    }

    // Retornar los datos de canciones, asegurándose que sea del tipo Song[]
    return songsData || [];
  } catch (error) {
    console.error(error);
    return []; // Retornar un arreglo vacío o manejar el error según tu lógica de aplicación
  }
};
