import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { navBarLinks } from '../navbar';
import '@testing-library/jest-dom';
import NavbarMobile, { navBarMobileTestId } from '../navbarMobile';

describe('Navbar Mobile', () => {
  const closeMobileNavbaMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render the navbar mobile', () => {
    render(
      <NavbarMobile
        navbarLinks={navBarLinks}
        shouldShowMobileNavbar={false}
        closeMobileNavbar={closeMobileNavbaMock}
      />,
    );

    expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
      'invisible opacity-0',
    );
  });

  it('should render the navbar mobile', () => {
    render(
      <NavbarMobile
        navbarLinks={navBarLinks}
        shouldShowMobileNavbar
        closeMobileNavbar={closeMobileNavbaMock}
      />,
    );

    expect(screen.getByTestId(navBarMobileTestId)).not.toHaveClass(
      'invisible opacity-0',
    );

    expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
      'opacity-100 md:invisible',
    );
  });

  it('should close the navbar mobile', async () => {
    render(
      <NavbarMobile
        navbarLinks={navBarLinks}
        shouldShowMobileNavbar
        closeMobileNavbar={closeMobileNavbaMock}
      />,
    );

    const user = userEvent.setup();

    await user.click(screen.getByText(navBarLinks[0]));

    expect(closeMobileNavbaMock).toHaveBeenCalled();
  });
});
