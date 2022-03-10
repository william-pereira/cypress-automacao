/// <reference types='cypress' />
describe ('logged in user', () => {
  // after(() => {
  // cy.reload()
  // cy.visit('https://barrigareact.wcaquino.me')
  // cy.get('[data-test="email"]').type('will@will')
  // cy.get('[data-test="passwd"]').type('1')
  // cy.get('.btn').click()
  // cy.get('.toast-message').should('have.text', 'Bem vindo, willl!')
  // cy.get('[data-test="menu-settings"]').click()
  // cy.xpath('//div[@class="dropdown-menu bg-dark show"]/a[1]').click()
  // cy.xpath('//tbody/tr/td[contains(text(),\'Uma conta de Internet Will ALTERADA\')]//following-sibling::td/i[@class=\'far fa-trash-alt\']').click()
  // })

it('Login', () => {
  cy.visit('https://barrigareact.wcaquino.me')
  cy.get('[data-test="email"]').type('will@will')
  cy.get('[data-test="passwd"]').type('1')
  cy.get('.btn').click()
  cy.get('.toast-message').should('have.text', 'Bem vindo, willl!')
})

it('Inserting an account', () => {
  cy.get('[data-test="menu-settings"]').click()
  cy.xpath('//div[@class="dropdown-menu bg-dark show"]/a[1]').click()
  cy.get('[data-test="nome"]').type('Uma conta de Internet Will')
  cy.xpath('//div[@class="form-group col-2"]/button[@alt="Salvar"]').click()
  cy.get('.toast-success > .toast-message').should('have.text','Conta inserida com sucesso!')
  cy.xpath('//tbody/tr/td[contains(text(),"Uma conta de Internet Will")]').should('exist')
})

it('Changing an account', () => {
  cy.get('[data-test="menu-settings"]').click()
  cy.xpath('//div[@class="dropdown-menu bg-dark show"]/a[1]').click()
  cy.xpath('//tbody/tr/td[contains(text(),\'Uma conta de Internet Will\')]//following-sibling::td/i[@class=\'far fa-edit\']').should('exist').click()
  cy.get('[data-test="nome"]').clear().type('Uma conta de Internet Will ALTERADA')
  cy.xpath('//div[@class="form-group col-2"]/button[@alt="Salvar"]').click()
  cy.get('.animated > .toast-message').should('have.text', 'Conta atualizada com sucesso!')
  cy.xpath('//tbody/tr/td[contains(text(),"Uma conta de Internet Will ALTERADA")]').should('exist')
})

it('Charging the same account', () => {
  cy.get('[data-test="menu-settings"]').click()
  cy.xpath('//div[@class="dropdown-menu bg-dark show"]/a[1]').click()
  cy.get('[data-test="nome"]').type('Uma conta de Internet Will ALTERADA')
  cy.xpath('//div[@class="form-group col-2"]/button[@alt="Salvar"]').click()
  cy.get('.toast-error > .toast-message').should('contain.text', 'status code 400')
})

it('Adding a transaction', () => {
  cy.get('[data-test="menu-movimentacao"]').click()
  cy.get('[data-test="data-transacao"]').type('2022-01-06')
  cy.get('[data-test="data-pagamento"]').type('2022-01-28')
  cy.get('#descricao').type('Conta de Internet')
  cy.get('[data-test="valor"]').type('100')
  cy.get('#envolvido').type('Will')
  cy.get('[data-test="status"]').then($statusbtn => {
    if($statusbtn.hasClass('btn btn-sm btn-block btn-success')) {
      cy.get('[data-test="status"]').click()
    } else {}
  })
  cy.xpath('//button[text()=\'Salvar\']').click()
})
})