describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should let the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '17')
  })

  it('should let multiple operations be chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should allow negative numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-44')
  })

  it('should allow decimal numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  })

  it('should allow very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '160768')
  })

  it('should output an error if divided by zero', () => {
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })

})
