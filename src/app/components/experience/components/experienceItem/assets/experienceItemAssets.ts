import backgroundItem from './backgroundItem.png';
import biggerLogo from './biggerLogo.svg';
import dcacLogo from './dcac_logo.svg';

export const experienceItemAssets = {
  backgroundItem,
  biggerLogo,
};

export const experienceList = [
  {
    companyLogo: dcacLogo,
    companyLogoClasses: 'w-[11rem] md:w-[18rem] 3xl:w-[25rem]',
    companyLogoAlt: 'A white logo with white letters saying deCampoaCampo',
    companyName: 'deCampoaCampo',
    companyLocation: 'Buenos Aires, Argentina',
    date: 'April 2025 - Present',
    position: 'Backend Developer',
    mainTechnologies: 'Nest.js, TypeScript, AWS, Docker, Jest, Microservicies',
    description: [
      'Developed a credit analysis software to evaluate users’ eligibility for loans.',
      'Developed an event management platform with QR-based guest access and invitation sharing.',
      'Developed a backend system to create, manage, and serve stories for users.',
    ],
  },
  {
    companyLogo: biggerLogo,
    companyLogoClasses: 'w-[9rem] md:w-[13rem] 3xl:w-[18rem]',
    companyLogoAlt: 'A white logo with white letters saying bigger',
    companyName: 'Bigger',
    companyLocation: 'Sídney, New South Wales, Australia',
    date: 'November 2022 - April 2025',
    position: 'Full Stack Developer',
    mainTechnologies:
      'Next.js, Nest.js, TypeScript, AWS, Jest, Cypress, Redux, Docker',
    description: [
      'Developed data labeling workflow for an Australian AI company.',
      'Built a business tool to enhance environmental and workplace sustainability.',
      'Optimized irrigation management software for 150+ Australian farms.',
      'Fixed AWS Cognito–Microsoft account issues for seamless login.',
    ],
  },
];
