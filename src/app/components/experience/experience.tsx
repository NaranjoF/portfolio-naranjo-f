import { v4 as uuidv4 } from 'uuid';
import { Sections } from '../navbar/utils';
import ExperienceItem from './components/experienceItem/experienceItem';
import { experienceTestId } from './utils';
import { experienceList } from './components/experienceItem/assets/experienceItemAssets';

export default function Experience() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id={Sections.EXPERIENCE}
      data-testid={experienceTestId}
    >
      <div className="pb-3 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-2xl 3xl:text-3xl">
          Experience
        </h2>
        <p className="text-gray-40 3xl:text-xl">Discover my work</p>
      </div>

      <p className="text-sm md:text-lg xl:text-base 3xl:text-xl text-white-50 text-center px-8 xl:px-64">
        Check out my experience as a developer to see how I can bring value to
        your projects and team.
      </p>

      <div className="my-14">
        {experienceList.map(experience => (
          <ExperienceItem
            key={uuidv4()}
            companyLocation={experience.companyLocation}
            companyLogo={experience.companyLogo}
            companyLogoAlt={experience.companyLogoAlt}
            companyName={experience.companyName}
            position={experience.position}
            date={experience.date}
            mainTechnologies={experience.mainTechnologies}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
}
