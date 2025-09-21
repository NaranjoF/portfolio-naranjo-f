import backgroundItem from '../../../experience/components/experienceItem/assets/backgroundItem.png';
import magnetoLogo from './magnetoLogo.svg';

export const projectItemAssets = {
  backgroundItem,
};

export const projectsList = [
  {
    projectLogo: magnetoLogo,
    projectLogoClasses: 'w-[4rem] md:w-[11rem] 3xl:w-[15rem]',
    projectLogoAlt: "Magneto's helmet logo",
    projectName: 'Magneto API',
    date: 'November 2024',
    mainTechnologies: 'Nest.js, TypeScript, Docker, Jest, SQL',
    description: [
      'Detects whether a DNA sample belongs to a mutant or a human via the /mutant endpoint.',
      'Persists all DNA sequences in a MySQL database for later analysis and tracking.',
      'Provides a /mutant/stats endpoint that returns statistics: total counts of human vs. mutant DNA, and the ratio between them.',
    ],
    repoLink: 'https://github.com/NaranjoF/magneto-api',
  },
];
