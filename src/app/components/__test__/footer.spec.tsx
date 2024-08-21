import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer, { footerTestId } from '../footer';

describe('Footer', () => {
  it('should render the footer component', () => {
    render(<Footer />);

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
