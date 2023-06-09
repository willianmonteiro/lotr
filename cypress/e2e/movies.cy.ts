describe('Main Page (movies)', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the movie list', () => {
    cy.intercept('GET', /\/v2\/movie\?/).as('getMovies');

    cy.wait('@getMovies').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);
      cy.get('[data-testid="movies-list"]').should('exist');
    });
  });

  it('should navigate to movie details on clicking "See Details"', () => {
    cy.intercept('GET', /\/v2\/movie\?/).as('getMovie');
      
    cy.get('[data-testid="movie-item"]').first().within(() => {
      cy.contains('see details').click();
    });

    cy.wait('@getMovie').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);

      cy.url().should('include', '/movie/');
      cy.get('[data-testid="movie-details"]').should('exist');
    });
    
  });

  it('should display search results based on input', () => {
    cy.get('[data-testid="search-input"]').type('Fellowship of the Ring');
    cy.wait(2000);
    cy.intercept('GET', /\/v2\/movie\?/).as('getMovie');

    cy.wait('@getMovie').then((interception) => {
      const response: any = interception.response;
      expect(response.statusCode).to.equal(200);

      cy.get('[data-testid="movie-item"]').should('have.length', 1);
      cy.contains('Fellowship of the Ring').should('be.visible');
    });
  });
});
