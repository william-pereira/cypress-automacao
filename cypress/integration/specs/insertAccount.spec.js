/// <reference types='cypress' />

import loc from '../../support/locators'

describe ('logged in user', () => {
 before(() => {
  cy.visit('https://barrigareact.wcaquino.me')
  cy.get(loc.LOGIN.USER).type('will@will')
  cy.get(loc.LOGIN.PASSWORD).type('1')
  cy.get(loc.LOGIN.BUTTON_LOGIN).click()
  cy.get(loc.MASSAGE).should('contain', 'Bem vindo')
 })

 it('Inserting an account', () => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.xpath(loc.MENU.CONTAS).click()
  cy.get(loc.CONTAS.NOME).type('Uma conta de Internet Will')
  cy.get(loc.CONTAS.BTN_SALVAR).click()
  cy.get(loc.MASSAGE).should('contain','sucesso!')
  // cy.xpath(loc.MASSAGES.NOME_CONTA).should('exist')
})

it('Changing an account', () => {
  cy.get(loc.MENU.SETTINGS).click()
  cy.xpath(loc.MENU.CONTAS).click()
  cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).should('exist').click()
  cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Uma conta de Internet Will ALTERADA')
  cy.get(loc.CONTAS.BTN_SALVAR).click()
  cy.get(loc.MASSAGE).should('contain', 'sucesso!')
  // cy.xpath('//tbody/tr/td[contains(text(),"Uma conta de Internet Will ALTERADA")]').should('exist')
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