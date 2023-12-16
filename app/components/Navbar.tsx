'use client';
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import NavLink from './NavLink';
import { useState } from 'react';

const NavBarMenu: React.FC = () => {
  return (
    <>
      <NavLink text="Home" href="#home" />
      <NavLink text="What is GPT?" href="#whpt3" />
      <NavLink text="Open AI" href="#possibility" />
      <NavLink text="Library" href="#blog" />
    </>
  );
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-8 px-8 md:px-12 lg:px-24">
      <div className="flex-1 items-center hidden lg:flex">
        <div className="mr-8">
          <Image src={'/logo.svg'} width={64} height={16} alt="Logo" />
        </div>
        <div className="gpt3-container flex">
          <NavBarMenu />
        </div>
        <div className="flex items-center ml-auto">
          <NavLink text="Sign In" href="#blog" />
          <NavLink
            text="Sign Up"
            href="#blog"
            className="rounded-[5px] bg-[#FF4820] px-4 py-2"
          />
        </div>
      </div>
      <div className="flex justify-between flex-1 lg:hidden">
        <Image src={'/logo.svg'} width={64} height={16} alt="Logo" />
        {menuOpen ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setMenuOpen(true)}
          />
        )}
        {menuOpen && (
          <div className="flex justify-end items-end flex-col text-end bg-footer p-8 absolute top-[40px] right-0 mt-[20px] min-w-[5px] shadow-[0px_0px_0px_rgba(0,0,0,0.3)] animate-fadeIn">
            <div className="flex flex-col gap-2">
              <NavBarMenu />
              <NavLink text="Sign In" href="#blog" />
              <NavLink
                text="Sign Up"
                href="#blog"
                className="rounded-[5px] bg-[#FF4820] px-4 py-2 text-center"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
