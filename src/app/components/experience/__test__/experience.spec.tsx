import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from '../experience';
import { experienceTestId } from '../utils';
import { experienceList } from '../components/experienceItem/assets/experienceItemAssets';

describe('Experience section', () => {
  it('Should render the experience component', () => {
    render(<Experience />);

    expect(screen.getByTestId(experienceTestId)).toBeInTheDocument();
  });

  it('Should render all the experience items', () => {
    render(<Experience />);

    experienceList.forEach(item => {
      expect(screen.getByText(item.companyName)).toBeInTheDocument();
      expect(screen.getByText(item.companyLocation)).toBeInTheDocument();
      expect(screen.getByText(item.date)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
      expect(
        screen.getByText(`Main technologies: ${item.mainTechnologies}`),
      ).toBeInTheDocument();
      expect(screen.getByText(item.position)).toBeInTheDocument();
    });
  });
});
