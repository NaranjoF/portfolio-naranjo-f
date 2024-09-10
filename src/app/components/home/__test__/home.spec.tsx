import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home, { homeTestId } from '../home';

describe('Home', () => {
  it('should render the home component', () => {
    render(<Home />);

    expect(screen.getByTestId(homeTestId)).toBeInTheDocument();
  });
});
