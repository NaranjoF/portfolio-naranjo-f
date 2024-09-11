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
      <div className="relative w-[4.5rem] h-[4.5rem]">
        <Image
          src={aboutMeIcons.iconContainer}
          alt="Rounded black background with gray star details."
          className="w-[4.5rem] h-[4.5rem]"
        />
        <Image
          src={icon}
          alt={iconAlt}
          className="absolute top-0 right-0 inset-0 m-auto"
          width={42}
          height={42}
        />
      </div>

      <p className="mt-4 text-center text-xl xl:text-base">{title}</p>
      <p className="text-sm md:text-lg xl:text-sm text-center text-white-55 mt-2">
        {description}
      </p>
    </div>
  );
}
