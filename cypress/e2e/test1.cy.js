///<reference types="cypress"/>

it('Googgle Search', ()=>{
cy.visit('https://Google.com')
cy.get('.gLFyf').type('Automation step by step{Enter}')
//cy.contains('Google Search').click()
})
