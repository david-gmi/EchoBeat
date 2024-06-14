"use client";

import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";
import Modal from './Modal';

const es = {
	sign_up: {
	  email_label: "Correo electrónico",
	  password_label: "Crea una contraseña",
	  email_input_placeholder: "Tu correo electrónico",
	  password_input_placeholder: "Tu contraseña",
	  button_label: "Registrarse",
	  loading_button_label: "Registrándose...",
	  social_provider_text: "Iniciar sesión con {{provider}}",
	  link_text: "¿No tienes una cuenta? Regístrate",
	  confirmation_text: "Revisa tu correo electrónico para el enlace de confirmación"
	},
	sign_in: {
	  email_label: "Correo electrónico",
	  password_label: "Tu contraseña",
	  email_input_placeholder: "Tu correo electrónico",
	  password_input_placeholder: "Tu contraseña",
	  button_label: "Iniciar sesión",
	  loading_button_label: "Iniciando sesión...",
	  social_provider_text: "Iniciar sesión con {{provider}}",
	  link_text: "¿Ya tienes una cuenta? Inicia sesión"
	},
	magic_link: {
	  email_input_label: "Correo electrónico",
	  email_input_placeholder: "Tu correo electrónico",
	  button_label: "Enviar enlace mágico",
	  loading_button_label: "Enviando enlace mágico...",
	  link_text: "Enviar un correo con enlace mágico",
	  confirmation_text: "Revisa tu correo electrónico para el enlace mágico"
	},
	forgotten_password: {
	  email_label: "Correo electrónico",
	  password_label: "Tu contraseña",
	  email_input_placeholder: "Tu correo electrónico",
	  button_label: "Enviar instrucciones para restablecer contraseña",
	  loading_button_label: "Enviando instrucciones...",
	  link_text: "¿Olvidaste tu contraseña?",
	  confirmation_text: "Revisa tu correo electrónico para el enlace de restablecimiento de contraseña"
	},
	update_password: {
	  password_label: "Nueva contraseña",
	  password_input_placeholder: "Tu nueva contraseña",
	  button_label: "Actualizar contraseña",
	  loading_button_label: "Actualizando contraseña...",
	  confirmation_text: "Tu contraseña ha sido actualizada"
	},
	verify_otp: {
	  email_input_label: "Correo electrónico",
	  email_input_placeholder: "Tu correo electrónico",
	  phone_input_label: "Número de teléfono",
	  phone_input_placeholder: "Tu número de teléfono",
	  token_input_label: "Token",
	  token_input_placeholder: "Tu token OTP",
	  button_label: "Verificar token",
	  loading_button_label: "Iniciando sesión..."
	}
  };

const AuthModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen, mode } = useAuthModal();
  
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title={mode === 'sign_in' ? "Bienvenido de nuevo" : "Crea una cuenta"} 
      description={mode === 'sign_in' ? "Ingrese a su cuenta." : "Regístrate para empezar."}
      isOpen={isOpen} 
      onChange={onChange} 
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={['github']}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#1e3a8a'
              }
            }
          }
        }}
        view={mode}
        theme="dark"
        localization={{ variables: es }}
      />
    </Modal>
  );
}

export default AuthModal;
