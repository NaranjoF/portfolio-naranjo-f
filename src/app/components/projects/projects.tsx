'use client';

import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Sections } from '../navbar/utils';
import { projectsList } from './components/assets/projectItemsAssets';
import ProjectItem from './components/projectItem';
import { projectsTestId } from './utils';

export default function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center w-full"
      id={Sections.PROJECTS}
      data-testid={projectsTestId}
    >
      <div className="pb-3 flex flex-col justify-center items-center">
        <h2 className="font-semibold text-2xl md:text-3xl xl:text-2xl 3xl:text-3xl">
          Projects
        </h2>
        <p className="text-gray-400 3xl:text-xl">Things I’ve built with code</p>
      </div>

      <p className="text-sm md:text-lg xl:text-base 3xl:text-xl text-white/70 text-center px-8 xl:px-64">
        Here are some examples of what I enjoy building with code.
      </p>

      <div className="my-14 w-full">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full flex justify-center"
        >
          {projectsList.map(project => (
            <SwiperSlide
              key={uuidv4()}
              className="flex justify-center min-h-[300px]"
            >
              <div className="flex justify-center w-full">
                <ProjectItem
                  projectLogo={project.projectLogo}
                  projectLogoClasses={project.projectLogoClasses}
                  projectLogoAlt={project.projectLogoAlt}
                  projectName={project.projectName}
                  date={project.date}
                  mainTechnologies={project.mainTechnologies}
                  description={project.description}
                  repoLink={project.repoLink}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
