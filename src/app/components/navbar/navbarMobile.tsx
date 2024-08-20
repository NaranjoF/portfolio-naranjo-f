import { v4 as uuidv4 } from 'uuid';

type Props = {
  navbarLinks: string[];
  shouldShowMobileNavbar: boolean;
};

export default function NavbarMobile({
  navbarLinks,
  shouldShowMobileNavbar,
}: Readonly<Props>) {
  return (
    <div
      className={`${shouldShowMobileNavbar ? 'opacity-100 md:invisible' : 'invisible opacity-0'} flex w-full absolute top-[105%] left-0 right-0 bg-gray-06 bg-opacity-95 transition-all duration-150`}
    >
      <div className="flex w-full h-full justify-center items-center">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex flex-col justify-center items-center">
            {navbarLinks.map(link => (
              <li
                key={uuidv4()}
                className="text-white text-center text-xl hover:bg-gray-10 hover:rounded-full transition-all my-2 w-full h-full"
              >
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
