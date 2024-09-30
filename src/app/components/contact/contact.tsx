import Image from 'next/image';
import { Sections } from '../navbar/utils';
import { contactTestId } from './utils';
import whiteDragon from '../../../../public/images/whiteDragon.png';

export default function Contact() {
  return (
    <section
      className="flex flex-col justify-center items-center w-full"
      id={Sections.CONTACT}
      data-testid={contactTestId}
    >
      <div className="my-14 flex justify-center items-center">
        <div className="w-[90%] h-[30rem] md:bg-[url('/images/backgroundContactTablet.svg')] xl:bg-[url('/images/backgroundContact.svg')] bg-cover xl:bg-center flex flex-col justify-between py-8 xl:py-16 items-center border border-gray-12 rounded-2xl shadow-sm shadow-black bg-gradient-to-b from-[#1A1A1A] from-[-10%] to-[rgba(26,26,26,0)] to-[68%]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-base md:text-2xl">
              Would you like to reach out to me?
            </p>

            <div className="flex flex-col justify-center items-center px-3 xl:px-36 pt-3 pb-6">
              <p className="text-center text-sm text-white-50">
                Looking to collaborate on a web development project? Feel free
                to reach out! I&apos;m always open to discussing new
                opportunities. You can contact me through my social media
                channels for any inquiries or project proposals. Let&apos;s
                create something great together!
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-base md:text-lg text-center mb-2">
                Contact me through
              </p>
              <div className="flex justify-center items-center flex-row">
                <button
                  type="button"
                  className="bg-white rounded-full text-black py-2 px-4 mr-3 hover:scale-105 transition-all "
                >
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </button>
                <button
                  type="button"
                  className="bg-gray-10 rounded-full text-white py-2 px-4 border border-gray-20 hover:scale-105 transition-all cursor-pointer"
                >
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                    Email me
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <Image
              src={whiteDragon}
              alt="Rounded logo showing a white dragon."
              className="w-[7rem] h-[7rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
