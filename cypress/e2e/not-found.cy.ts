describe('NotFoundScreen', () => {
  it('should display the not found message', () => {
    cy.visit('/not-found');

    cy.get('[data-testid="not-found-card"]')
      .contains('Sorry... nothing here.')
      .should('exist');
  });
});
