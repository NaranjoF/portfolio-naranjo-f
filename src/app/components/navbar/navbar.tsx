'use client';

import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import whiteDragon from '../../../../public/images/whiteDragon.png';
import mobileMenuLogo from '../../../../public/images/mobileMenuLogo.svg';
import NavbarMobile from './navbarMobile';
import { Sections } from './utils';

export const navBarLinks = Object.values(Sections);
export const navBarMobileButtonTestid = 'navbar-mobile-button';
export const navBarLinkTestId = 'navbar-link-';

export default function Navbar() {
  const [shouldShowMobileNavbar, setShouldShowMobileNavbar] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent bg-opacity-30 backdrop-blur-sm text-white flex flex-row justify-between pt-3 items-center border-b border-gray-12 px-12 z-10">
      <div className="pb-3">
        <a className="flex items-center" href={`#${Sections.HOME}`}>
          <Image
            src={whiteDragon}
            alt="Rounded logo showing a white dragon."
            className="w-[3.1rem] h-[3.1rem]"
          />
        </a>
      </div>
      <div className="rounded-full w-10 h-10 bg-gray-10 flex justify-center items-center md:hidden border border-white mb-2">
        <button
          onClick={() => setShouldShowMobileNavbar(!shouldShowMobileNavbar)}
          className="w-full h-full flex items-center justify-center"
          type="button"
          data-testid={navBarMobileButtonTestid}
        >
          <Image
            src={mobileMenuLogo}
            alt="Rounded logo showing a white dragon."
            className="w-[1.25rem] h-[1.25rem]"
          />
        </button>
      </div>
      <NavbarMobile
        navbarLinks={navBarLinks}
        shouldShowMobileNavbar={shouldShowMobileNavbar}
      />
      <nav className="hidden md:flex">
        <ul className="flex list-none">
          {navBarLinks.map(link => (
            <li key={uuidv4()}>
              <a
                className="text-white text-sm py-3 px-4 hover:bg-gray-10 hover:rounded-full transition-all"
                href={`#${link}`}
                data-testid={`${navBarLinkTestId}${link}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
