import Image from 'next/image';
import { experienceItemAssets } from './assets/experienceItemAssets';

type Props = {
  companyLogo: string;
  companyLogoAlt: string;
  companyName: string;
  companyLocation: string;
  date: string;
  position: string;
  mainTechnologies: string;
  description: string;
};

export default function ExperienceItem({
  companyLogo,
  companyLogoAlt,
  companyName,
  position,
  companyLocation,
  date,
  mainTechnologies,
  description,
}: Readonly<Props>) {
  return (
    <div className="max-w-[20rem] md:max-w-[42rem] 3xl:max-w-[52rem] border border-gray-12 rounded-2xl p-10 flex flex-col justify-center items-center bg-gradient-to-b from-[#1A1A1A] from-[-10%] to-[rgba(26,26,26,0)] to-[68%] shadow-sm shadow-black">
      <div className="border border-gray-20 rounded-2xl relative">
        <Image
          src={experienceItemAssets.backgroundItem}
          className="w-[37rem] 3xl:w-[46rem] h-auto"
          alt="A black background with gray star-like icons fading into black in a gradient."
        />

        <Image
          src={companyLogo}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[9rem] md:w-[13rem] 3xl:w-[18rem]"
          alt={companyLogoAlt}
        />

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 border border-gray-12 rounded-full px-3 py-1 md:px-5 md:py-2 bg-gray-06">
          <p className="text-md md:text-lg 3xl:text-xl font-semibold">
            {companyName}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col mt-10">
          <div>
            <p className="text-xl 3xl:text-2xl text-center md:text-left font-semibold">
              {position}
            </p>
          </div>
          <div className="w-full text-xs md:text-sm 3xl:text-xl flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p>{companyLocation}</p>
            <p>{date}</p>
          </div>
        </div>

        <div className="mt-2 text-xs 3xl:text-lg text-center md:text-left md:text-sm flex justify-start w-full">
          <p>Main technologies: {mainTechnologies}</p>
        </div>

        <div className="mt-3 text-sm xl:text-base 3xl:text-xl flex justify-start w-full">
          <p className="text-white-55 text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
