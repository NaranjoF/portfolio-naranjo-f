import Image from 'next/image';
import { footerIcons } from '../../../../public/images/footer/footerIcons';

export const footerTestId = 'footer';

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-12 py-2 mx-5 md:mx-20"
      data-testid={footerTestId}
    >
      <div className="text-gray-40 font-light text-xs md:text-sm flex flex-col xl:flex-row justify-center items-center relative">
        <p className="text-center">
          Made with ♥ and TypeScript by NaranjoF using Next.js
        </p>
        <div className="xl:absolute xl:right-0 flex justify-center items-center flex-row mt-3 xl:mt-0">
          <button type="button" className="mr-3 w-full h-full">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={footerIcons.githubLogo}
                alt="github logo gray"
                className="hover:-translate-y-1 hover:scale-105 duration-150"
                width={20}
                height={20}
              />
            </a>
          </button>

          <button type="button" className="w-full h-full">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={footerIcons.linkedinLogo}
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
