import Image from 'next/image';
import githubLogo from '../../../public/images/githubLogo.svg';
import linkedinLogo from '../../../public/images/linkedinLogo.svg';

export const footerTestId = 'footer';
export const githubLink = 'https://github.com/NaranjoF';
export const linkedinLink = 'https://www.linkedin.com/in/naranjofacundo/';

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-12 py-2 mx-20"
      data-testid={footerTestId}
    >
      <div className="text-gray-40 font-light text-xs md:text-sm flex flex-col xl:flex-row justify-center items-center">
        <p className="flex-1 text-center">
          @{new Date().getFullYear()} NaranjoF All rights reserved.
        </p>
        <div className="flex justify-center items-center flex-row mt-3 xl:mt-0">
          <button type="button" className="mr-3 w-full h-full">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Image
                src={githubLogo}
                alt="github logo gray"
                className="hover:-translate-y-1 hover:scale-105 duration-150"
                width={20}
                height={20}
              />
            </a>
          </button>

          <button type="button" className="w-full h-full">
            <a href={linkedinLink} target="_blank" rel="noreferrer">
              <Image
                src={linkedinLogo}
                alt="linkedin logo gray"
                className="hover:-translate-y-1 hover:scale-105 duration-150"
                width={20}
                height={20}
              />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}
