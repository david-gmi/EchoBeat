// SidebarItem.tsx
import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';
import { LogoProps } from '../logo/Logo'; // Asegúrate de importar esto correctamente

interface SidebarItemProps {
  icon: IconType | FC<LogoProps>;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
        active && "text-white"
        )
      }
    >
      <Icon size={26} /> {/* Asegúrate de que el componente `Icon` maneje el prop `size` */}
      <p className="truncate w-100">{label}</p>
    </Link>
   );
}

export default SidebarItem;
