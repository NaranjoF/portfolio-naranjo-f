import { aboutMeItems } from './utils';
import ItemSection from './components/itemSection';
import { Sections } from '../navbar/utils';

export const aboutTestId = 'about';

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id={Sections.ABOUT}
      data-testid={aboutTestId}
    >
      <div className="pb-3 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-2xl 3xl:text-3xl">
          About me
        </h2>
        <p className="text-gray-40 3xl:text-xl">Know me better</p>
      </div>

      <p className="text-sm md:text-lg xl:text-base 3xl:text-xl text-white-50 text-center px-8 xl:px-64">
        With a strong determination to achieve excellent results and a focus on
        best practices, I build complex systems every day that provide
        solutions. I was raised with the mindset that nothing is impossible and
        that everything comes in due time.
      </p>

      <div className="my-14 mx-0 xl:m-14">
        <ItemSection items={aboutMeItems.slice(0, 3)} lastElements={false} />

        <div className="hidden xl:flex h-[0.5px] w-full bg-gray-12 my-9" />

        <ItemSection items={aboutMeItems.slice(3, 6)} lastElements />
      </div>
    </section>
  );
}
