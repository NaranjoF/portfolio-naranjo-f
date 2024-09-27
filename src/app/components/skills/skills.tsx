import { Sections } from '../navbar/utils';
import {
  programmingLanguagesAndOSBlock,
  frontendBlock,
  backendAndCloudBlock,
  developmentAndAutomationBlock,
  skillsTestId,
} from './utils';
import SkillBlock from './components/skillBlock';

export default function Skills() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id={Sections.SKILLS}
      data-testid={skillsTestId}
    >
      <div className="pb-3 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-2xl">
          Skills
        </h2>
        <p className="text-gray-40">Discover my skills</p>
      </div>

      <p className="text-sm md:text-lg xl:text-sm text-white-50 text-center px-8 xl:px-64">
        Here are the main tools I use to build solutions for both the frontend
        and backend.
      </p>

      <div className="my-14 flex flex-col justify-center items-center">
        <SkillBlock
          blockTitle={programmingLanguagesAndOSBlock.title}
          blockItems={programmingLanguagesAndOSBlock.items}
          cols="grid-cols-2"
        />

        <div className="flex h-[0.5px] w-3/4 bg-gray-12 my-9" />

        <SkillBlock
          blockTitle={frontendBlock.title}
          blockItems={frontendBlock.items}
          cols="grid-cols-4"
        />

        <div className="flex h-[0.5px] w-3/4 bg-gray-12 my-9" />

        <SkillBlock
          blockTitle={backendAndCloudBlock.title}
          blockItems={backendAndCloudBlock.items}
          cols="grid-cols-4"
        />

        <div className="flex h-[0.5px] w-3/4 bg-gray-12 my-9" />

        <SkillBlock
          blockTitle={developmentAndAutomationBlock.title}
          blockItems={developmentAndAutomationBlock.items}
          cols="grid-cols-4"
        />
      </div>
    </section>
  );
}
