describe('Donut Chart Color with Right Legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-chart-right-legend-color-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-chart-right-legend-color-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.VictoryContainer').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Pets');
  });
});
