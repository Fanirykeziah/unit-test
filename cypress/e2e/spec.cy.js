import { keyboard } from "@testing-library/user-event/dist/keyboard";

describe('todo test', () => {
      // remplacer la valeur avec l'URL de votre application
    xit('test', () => {
      cy.visit(' https://example.cypress.io')
        cy.contains('type').click();
        
            // Should be on a new URL which
            // includes '/commands/actions'
            cy.url().should('include', '/commands/actions')
        
            // Get an input, type into it
            cy.get('.action-email').type('fake@email.com')
        
            //  Verify that the value has been updated
            cy.get('.action-email').should('have.value', 'fake@email.com')
          })
    
    it('Ajouter une tache à la liste' , () => {
      cy.visit('http://localhost:3000/')
      cy.get('#add-todo').type('test')
      cy.get('#add-todo').type('{Enter}').click()
      cy.get('.list-item').should('contain' , 'test')
    })

    it('Vérifie que lorsque le checkbox est coché , la valeur se place dans la liste done', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#add-todo').type('test').type('{Enter}').click()
      cy.get('#test-0').check()
      cy.get('#test-0').should('not.exist')
    })
        })