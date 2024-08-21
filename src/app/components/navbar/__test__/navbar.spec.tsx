import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar, {
  navBarLinks,
  navBarLinkTestId,
  navBarMobileButtonTestid,
} from '../navbar';
import '@testing-library/jest-dom';
import { navBarMobileTestId } from '../navbarMobile';

describe('Navbar', () => {
  it('should render the navbar with the correct links', () => {
    render(<Navbar />);

    navBarLinks.forEach(link => {
      expect(
        screen.getByTestId(`${navBarLinkTestId}${link}`),
      ).toBeInTheDocument();
    });
  });

  it('should not render the navbar mobile', () => {
    render(<Navbar />);

    expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
      'invisible opacity-0',
    );
  });

  it('should open the navbar mobile menu with the correct links', () => {
    render(<Navbar />);

    userEvent.click(screen.getByTestId(navBarMobileButtonTestid));

    waitFor(() => {
      expect(screen.getByTestId(navBarMobileTestId)).not.toHaveClass(
        'invisible opacity-0',
      );

      expect(screen.getByTestId(navBarMobileTestId)).toHaveClass(
        'opacity-100 md:invisible',
      );
    });

    navBarLinks.forEach(link => {
      expect(
        screen.getByTestId(`${navBarLinkTestId}${link}`),
      ).toBeInTheDocument();
    });
  });
});
