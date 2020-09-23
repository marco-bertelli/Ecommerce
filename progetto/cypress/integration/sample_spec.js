describe('My First Test', () => {
    it('Go to home with login', () => {
      cy.visit('localhost:4200/login')

      cy.get('app-input-text[id=username]')
      .type("marco")
      cy.get('app-input-text[id=password]')
      .type("prova")

      cy.get('.invia')
      .click()

      cy.url('/home')



      
    })
  })