describe('Home section', () => {
  it('should render the home component', () => {
    cy.visit('/');

    cy.get('[data-testid="home"]').should('be.visible');
  });
});
