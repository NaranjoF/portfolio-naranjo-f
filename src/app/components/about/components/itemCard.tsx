import Image from 'next/image';
import { aboutMeIcons } from '../../../../../public/images/aboutMe/aboutMeIcons';

type Props = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  classToAdd?: string;
};

export default function ItemCard({
  title,
  description,
  icon,
  iconAlt,
  classToAdd,
}: Readonly<Props>) {
  return (
    <div
      className={`flex flex-col px-4 md:px-0 justify-center items-center max-w-[25rem] md:max-w-[40rem] xl:max-w-[25rem] ${classToAdd}`}
    >
      <div className="relative w-[4.5rem] h-[4.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem]">
        <Image
          src={aboutMeIcons.iconContainer}
          alt="Rounded black background with gray star details."
          className="w-[4.5rem] h-[4.5rem] 3xl:w-[5.5rem] 3xl:h-[5.5rem]"
        />
        <Image
          src={icon}
          alt={iconAlt}
          className="absolute top-0 right-0 inset-0 m-auto w-[2.6rem] h-[2.6rem] 3xl:w-[3rem] 3xl:h-[3rem]"
        />
      </div>

      <p className="mt-4 text-center text-xl xl:text-lg 3xl:text-xl">{title}</p>
      <p className="text-sm md:text-lg xl:text-sm 3xl:text-base text-center text-white-55 mt-2">
        {description}
      </p>
    </div>
  );
}
