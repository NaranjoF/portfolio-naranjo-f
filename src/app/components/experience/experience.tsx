'use client';

import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Sections } from '../navbar/utils';
import ExperienceItem from './components/experienceItem/experienceItem';
import { experienceTestId } from './utils';
import { experienceList } from './components/experienceItem/assets/experienceItemAssets';

export default function Experience() {
  return (
    <section
      className="flex flex-col justify-center items-center w-full"
      id={Sections.EXPERIENCE}
      data-testid={experienceTestId}
    >
      <div className="pb-3 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-2xl 3xl:text-3xl">
          Experience
        </h2>
        <p className="text-gray-400 3xl:text-xl">Discover my work</p>
      </div>

      <p className="text-sm md:text-lg xl:text-base 3xl:text-xl text-white/70 text-center px-8 xl:px-64">
        Check out my experience as a developer to see how I can bring value to
        your projects and team.
      </p>

      <div className="my-14 w-full">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full flex justify-center"
        >
          {experienceList.map(experience => (
            <SwiperSlide
              key={uuidv4()}
              className="flex justify-center min-h-[300px]"
            >
              <div className="flex justify-center w-full">
                <ExperienceItem
                  companyLocation={experience.companyLocation}
                  companyLogo={experience.companyLogo}
                  companyLogoClasses={experience.companyLogoClasses}
                  companyLogoAlt={experience.companyLogoAlt}
                  companyName={experience.companyName}
                  position={experience.position}
                  date={experience.date}
                  mainTechnologies={experience.mainTechnologies}
                  description={experience.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
