import Image from 'next/image';
import whiteDragon from '../../../public/images/whiteDragon.png';
import { Sections } from './navbar/utils';

export const homeTestId = 'home';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[url('/images/homeBackground.png')] bg-no-repeat flex flex-col xl:flex-row items-center justify-center xl:justify-between px-12"
      id={Sections.HOME}
      data-testid={homeTestId}
    >
      <div className="hidden justify-center items-center md:flex xl:hidden mb-2">
        <Image
          src={whiteDragon}
          alt="Rounded logo showing a white dragon."
          width={250}
          height={250}
        />
      </div>

      <div className="flex justify-center items-center md:hidden mb-2">
        <Image
          src={whiteDragon}
          alt="Rounded logo showing a white dragon."
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-center flex-col text-center xl:text-left">
        <div className="flex justify-center flex-col">
          <p className="text-grey-40 font-semibold text-3xl md:text-4xl xl:text-3xl mb-2">
            Hi! I am <span className="text-white">Facundo Naranjo</span>, a{' '}
            <span className="text-white">Full Stack Dev</span>.
          </p>
          <p className="text-sm md:text-lg xl:text-sm text-white-50">
            Based in Argentina, I specialize in creating intuitive user
            experiences and developing robust backend systems. I am deeply
            committed to problem-solving and constantly learning to stay
            up-to-date with the latest industry trends.
          </p>
        </div>

        <div className="flex flex-col justify-center mt-2">
          <p className="text-base md:text-lg xl:text-base mb-2">
            Would you like to know more about me?
          </p>
          <div className="flex flex-row justify-center xl:justify-start">
            <button
              className="bg-white text-black p-3 rounded-full text-sm md:text-base md:p-4 xl:p-3 xl:text-sm mr-3 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
              type="button"
            >
              Go to About
            </button>
            <button
              className="bg-gray-10 p-3 rounded-full text-sm transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150 md:text-base md:p-4 xl:p-3 xl:text-sm"
              type="button"
            >
              Go to Experience
            </button>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex w-full justify-end items-center">
        <Image
          src={whiteDragon}
          alt="Rounded logo showing a white dragon."
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
