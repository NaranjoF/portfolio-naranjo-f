import Image from 'next/image';
import { skillsIcons } from '../../../../../public/images/skills/skillsIcons';

type Props = {
  itemName: string;
  itemLogo: string;
  itemLogoAlt: string;
  link: string;
};

export default function SkillItem({
  itemLogo,
  itemLogoAlt,
  itemName,
  link,
}: Readonly<Props>) {
  return (
    <div className="flex flex-col justify-center items-center px-3">
      <div className="relative w-[5rem] h-[5rem] hover:scale-105 transition-all cursor-pointer mb-2">
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={skillsIcons.iconContainer}
            alt="Rounded black background with gray star details."
            className="w-[5rem] h-[5rem]"
          />
          <Image
            src={itemLogo}
            alt={itemLogoAlt}
            className="absolute top-0 right-0 inset-0 m-auto w-[2.5rem] h-auto"
          />
        </a>
      </div>
      <p className="text-center">{itemName}</p>
    </div>
  );
}
