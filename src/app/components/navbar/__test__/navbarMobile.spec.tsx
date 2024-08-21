import { render, screen } from '@testing-library/react';
import { navBarLinks } from '../navbar';
import '@testing-library/jest-dom';
import NavbarMobile, { navBarMobileTestId } from '../navbarMobile';

describe('Navbar Mobile', () => {
  it('should not render the navbar mobile', () => {
    render(
      <NavbarMobile navbarLinks={navBarLinks} shouldShowMobileNavbar={false} />,
    );

    expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
      'invisible opacity-0',
    );
  });

  it('should render the navbar mobile', () => {
    render(<NavbarMobile navbarLinks={navBarLinks} shouldShowMobileNavbar />);

    expect(screen.getByTestId(navBarMobileTestId)).not.toHaveClass(
      'invisible opacity-0',
    );

    expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
      'opacity-100 md:invisible',
    );
  });
});
