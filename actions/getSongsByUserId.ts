import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

// Define la interfaz del usuario según tus definiciones
interface User {
  id: string;
  // Otras propiedades del usuario según sea necesario
}

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  // Obtener el usuario de manera asíncrona
  const { data: userData, error: userError } = await supabase.auth.getUser();

  // Manejar errores al obtener el usuario
  if (userError) {
    console.error("Error al obtener el usuario:", userError.message);
    return [];
  }

  if (!userData || !userData.user || !userData.user.id) {
    console.log("No hay sesión de usuario disponible o falta el ID.");
    return [];
  }

  const userId = userData.user.id;

  // Obtener canciones del usuario usando su ID
  const { data: songsData, error: songsError } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  // Manejar errores al obtener las canciones
  if (songsError) {
    console.error("Error al obtener canciones:", songsError.message);
    return [];
  }

  // Retornar los datos de canciones, asegurándose que sea del tipo Song[]
  return songsData || [];
};
