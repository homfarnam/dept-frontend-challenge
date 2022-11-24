describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Render page correctly', () => {
    cy.visit('/')
  })

  it('Navbar element', () => {
    cy.get('header')
  })

  it('Click on dots and open menu', () => {
    cy.get('#dots').click()
    cy.get('.megaMenu')
  })

  it('Should be visible Home link after click on dots', () => {
    cy.get('#dots').click()
    cy.get('.megaMenu')
    cy.get('.megaMenu').contains('Home')
    cy.get('#close').click()
  })

  it('Get contact form and get name input and write into it', () => {
    cy.get('.home__contactForm')

    cy.get('.home__contactForm').find('input[name="name"]').type('Test')

    cy.get('.home__contactForm')
      .find('input[name="name"]')
      .should('have.value', 'Test')
  })

  it('Click on arrow up and scroll to top', () => {
    cy.get('#arrow-up').click()
    cy.scrollTo('top')
  })
})

export {}
