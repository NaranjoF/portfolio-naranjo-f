import { contactTestId } from '../../../src/app/components/contact/utils';

describe('Contact', () => {
  it('should render the contact section', () => {
    cy.visit('/');

    cy.get(`[data-testid=${contactTestId}]`).should('be.visible');
  });

  it('should have the correct LinkedIn URL', () => {
    cy.visit('/');

    cy.get('a[href^="https://www.linkedin.com"]').should(
      'have.attr',
      'href',
      Cypress.env('LINKEDIN_URL'),
    );
  });

  it('should have the correct Email URL', () => {
    cy.visit('/');

    cy.get('a[href^="mailto:"]').should(
      'have.attr',
      'href',
      `mailto:${Cypress.env('EMAIL')}`,
    );
  });
});
