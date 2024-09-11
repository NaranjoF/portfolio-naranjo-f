import {
  Sections,
  navBarLinkTestId,
} from '../../../src/app/components/navbar/utils';

describe('Navbar', () => {
  const navBarLinks = Object.values(Sections);

  it('should redirect the user to the correct section', () => {
    cy.visit('/');

    navBarLinks.forEach(link => {
      cy.get(`a[data-testid=${navBarLinkTestId}${link}]`).click();
      cy.url().should('eq', `${Cypress.config('baseUrl')}#${link}`);
    });
  });
});
