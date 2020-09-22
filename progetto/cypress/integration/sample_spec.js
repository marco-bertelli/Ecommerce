describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('localhost:4200/login')

      cy.get('app-input-text[id=username]')
      .type("marco")
      
    })
  })