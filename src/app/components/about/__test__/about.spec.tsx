import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About, { aboutTestId } from '../about';
import { aboutMeItems } from '../utils';

describe('About section', () => {
  it('Should render the footer component', () => {
    render(<About />);

    expect(screen.getByTestId(aboutTestId)).toBeInTheDocument();
  });

  it('Should render all the about me items', () => {
    render(<About />);

    aboutMeItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
