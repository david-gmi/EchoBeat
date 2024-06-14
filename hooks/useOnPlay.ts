import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useSubscribeModal from "./useSubscribeModal";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      authModal.onOpen('sign_in'); // Abrir modal de inicio de sesión
      return;
    }

    if (!subscription) {
      subscribeModal.onOpen(); // Abrir modal de suscripción
      return;
    }

    // Configurar el reproductor con la canción seleccionada
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
};

export default useOnPlay;
