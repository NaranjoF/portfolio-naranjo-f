describe('Home section', () => {
  it('should render the home component', () => {
    cy.visit('/');

    cy.get('[data-testid="home"]').should('be.visible');
  });

  it('should redirect the user to the about section', () => {
    cy.visit('/');

    cy.get('button').contains('Go to About').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}#About`);
  });
});
