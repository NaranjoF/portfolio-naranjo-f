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
      <div className="relative w-[5rem] h-[5rem] 3xl:w-[6rem] 3xl:h-[6rem] hover:scale-105 transition-all cursor-pointer mb-2">
        <a href={link} target="_blank" rel="noreferrer" data-testid={itemName}>
          <Image
            src={skillsIcons.iconContainer}
            alt="Rounded black background with gray star details."
            className="w-[5rem] h-[5rem] 3xl:w-[6rem] 3xl:h-[6rem]"
          />
          <Image
            src={itemLogo}
            alt={itemLogoAlt}
            className="absolute top-0 right-0 inset-0 m-auto w-[2.5rem] h-auto"
          />
        </a>
      </div>
      <p className="text-center 3xl:text-xl">{itemName}</p>
    </div>
  );
}
