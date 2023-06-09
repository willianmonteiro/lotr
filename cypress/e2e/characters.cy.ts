describe('Characters', () => {
  beforeEach(() => {
    cy.visit('/characters');
  });

  it('[list-characters]: should display the character list', () => {
    cy.intercept('GET', /\/v2\/character\?/).as('getCharacters');

    cy.wait('@getCharacters').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);
      cy.get('[data-testid="characters-list"]').should('exist');
    });
  });

  it('[see-character]: should navigate to character details on clicking "See Details"', () => {
    cy.intercept('GET', /\/v2\/character\?/).as('getCharacter');
      
    cy.get('[data-testid="character-item"]').first().within(() => {
      cy.contains('see details').click();
    });

    cy.wait('@getCharacter').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);

      cy.url().should('include', '/character/');
      cy.get('[data-testid="character-details"]').should('exist');
    });
    
  });

  it('[list-characters]: should display search results based on input', () => {
    cy.get('[data-testid="search-input"]').type('Frodo Baggins');
    cy.wait(2000);
    cy.intercept('GET', /\/v2\/character\?/).as('getCharacter');

    cy.wait('@getCharacter').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);

      cy.get('[data-testid="character-item"]').should('have.length', 1);
      cy.contains('Frodo Baggins').should('be.visible');
    });
  });
});
