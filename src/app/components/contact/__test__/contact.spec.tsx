import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { contactTestId } from '../utils';
import Contact from '../contact';

describe('Contact section', () => {
  it('Should render the Contact component', () => {
    render(<Contact />);

    expect(screen.getByTestId(contactTestId)).toBeInTheDocument();
  });

  it('Should render the Contact component with the correct links', () => {
    process.env.NEXT_PUBLIC_LINKEDIN_URL = 'test';
    process.env.NEXT_PUBLIC_EMAIL = 'testEmail';
    render(<Contact />);

    expect(screen.getByText('LinkedIn')).toHaveAttribute(
      'href',
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
    );

    expect(screen.getByText('Email me')).toHaveAttribute(
      'href',
      `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    );
  });
});
