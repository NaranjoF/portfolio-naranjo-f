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
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    frontendBlock.items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    backendAndCloudBlock.items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    developmentAndAutomationBlock.items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
