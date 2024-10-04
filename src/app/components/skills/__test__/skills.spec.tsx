import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../skills';
import {
  backendAndCloudBlock,
  developmentAndAutomationBlock,
  frontendBlock,
  programmingLanguagesAndOSBlock,
  skillsTestId,
} from '../utils';

describe('Skills section', () => {
  it('Should render the Skills component', () => {
    render(<Skills />);

    expect(screen.getByTestId(skillsTestId)).toBeInTheDocument();
  });

  it('Should render all the skills items', () => {
    render(<Skills />);

    programmingLanguagesAndOSBlock.items.forEach(item => {
      expect(screen.getByTestId(item.name)).toBeInTheDocument();
      expect(screen.getByTestId(item.name)).toHaveAttribute('href', item.link);
    });

    frontendBlock.items.forEach(item => {
      expect(screen.getByTestId(item.name)).toBeInTheDocument();
      expect(screen.getByTestId(item.name)).toHaveAttribute('href', item.link);
    });

    backendAndCloudBlock.items.forEach(item => {
      expect(screen.getByTestId(item.name)).toBeInTheDocument();
      expect(screen.getByTestId(item.name)).toHaveAttribute('href', item.link);
    });

    developmentAndAutomationBlock.items.forEach(item => {
      expect(screen.getByTestId(item.name)).toBeInTheDocument();
      expect(screen.getByTestId(item.name)).toHaveAttribute('href', item.link);
    });
  });
});
