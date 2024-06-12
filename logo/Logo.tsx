// Logo.tsx
import React from "react";

export interface LogoProps { // Cambiado a exportar LogoProps
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 24 }) => {  // Default size
  const logoStyle = {
    display: "block",
    margin: "auto",
    width: size * 7, // Ajusta el tamaño según sea necesario
    height: "auto" // Mantener la relación de aspecto
  };

  return (
    <img 
      src="../images/logox2.svg" 
      alt="Logo"
      style={logoStyle} 
    />
  );
}

export default Logo;
