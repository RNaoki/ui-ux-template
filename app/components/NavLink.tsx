import React from 'react';
import { twMerge } from 'tailwind-merge';

interface INavLinkProps {
  href: string;
  text: string;
  className?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ href, text, className }) => {
  return (
    <p
      className={twMerge(
        'text-[white] font-[500] text-[18px] leading-[25px] mx-4 cursor-pointer',
        className,
      )}
    >
      <a href={href}>{text}</a>
    </p>
  );
};

export default NavLink;
