import Image from 'next/image';
import { projectItemAssets } from './assets/projectItemsAssets';
import { footerIcons } from '../../../../../public/images/footer/footerIcons';

type Props = {
  projectLogo: string;
  projectLogoClasses: string;
  projectLogoAlt: string;
  projectName: string;
  date: string;
  mainTechnologies: string;
  description: string[];
  repoLink: string;
};

export default function ProjectItem({
  projectLogo,
  projectLogoClasses,
  projectLogoAlt,
  projectName,
  date,
  mainTechnologies,
  description,
  repoLink,
}: Readonly<Props>) {
  return (
    <div className="max-w-[20rem] md:max-w-[42rem] 3xl:max-w-[52rem] border border-gray-12 rounded-2xl p-10 flex flex-col justify-start items-center bg-gradient-to-b from-[#1A1A1A] from-[-10%] to-[rgba(26,26,26,0)] to-[68%] shadow-sm shadow-black h-[43rem] xl:h-[55rem]">
      <div className="border border-gray-20 rounded-2xl relative">
        <button type="button" className="absolute right-3 bottom-3">
          <a href={repoLink} target="_blank" rel="noreferrer">
            <Image
              src={footerIcons.githubLogo}
              alt="github logo gray"
              className="hover:-translate-y-1 hover:scale-105 duration-150"
              width={30}
              height={30}
            />
          </a>
        </button>
        <Image
          src={projectItemAssets.backgroundItem}
          className="w-[37rem] 3xl:w-[46rem] h-auto"
          alt="A black background with gray star-like icons fading into black in a gradient."
        />

        <Image
          src={projectLogo}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${projectLogoClasses}`}
          alt={projectLogoAlt}
        />

        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 border border-gray-12 rounded-full px-3 py-1 md:px-5 md:py-2 bg-gray-06">
          <p className="text-md md:text-lg 3xl:text-xl font-semibold text-nowrap">
            {projectName}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col mt-10">
          {/* <div>
            <p className="text-xl 3xl:text-2xl text-center md:text-left font-semibold">
              {position}
            </p>
          </div> */}
          <div className="w-full text-xs md:text-sm 3xl:text-xl flex flex-col md:flex-row justify-center md:justify-between items-center">
            {/* <p>{companyLocation}</p> */}
            <p>{date}</p>
          </div>
        </div>

        <div className="mt-2 text-xs 3xl:text-lg text-center md:text-left md:text-sm flex justify-start w-full">
          <p>Main technologies: {mainTechnologies}</p>
        </div>

        <div className="mt-3 text-sm xl:text-base 3xl:text-xl w-full">
          <ul className="list-disc list-outside xl:list-disc xl:list-inside text-white-55 text-center center md:text-left space-y-2 marker:text-white">
            {description.map(bullet => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
