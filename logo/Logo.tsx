import React from "react";

interface LogoProps {
  size: number;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  const logoStyle = {
    display: "block",
    margin: "auto",
    width: size * 7, // Double the size
    height: "auto" // Maintain aspect ratio
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

