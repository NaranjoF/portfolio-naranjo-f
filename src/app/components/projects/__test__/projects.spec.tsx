import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../projects';
import { projectsTestId } from '../utils';
import { projectsList } from '../components/assets/projectItemsAssets';

jest.mock('swiper/react', () => {
  return {
    Swiper: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    SwiperSlide: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

jest.mock('swiper/modules', () => ({
  Pagination: () => null,
}));

describe('Projects section', () => {
  it('Should render the projects component', () => {
    render(<Projects />);

    expect(screen.getByTestId(projectsTestId)).toBeInTheDocument();
  });

  it('Should render all the projects items', () => {
    render(<Projects />);

    projectsList.forEach(item => {
      expect(screen.getByText(item.projectName)).toBeInTheDocument();
      expect(screen.getByText(item.date)).toBeInTheDocument();
      item.description.forEach(bullet => {
        expect(screen.getByText(bullet)).toBeInTheDocument();
      });
      expect(
        screen.getByText(`Main technologies: ${item.mainTechnologies}`),
      ).toBeInTheDocument();
    });
  });
});
