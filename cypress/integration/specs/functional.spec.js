/// <reference types='cypress' />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe ('logged in user', () => {
 before(() => {
  cy.login('will@will','1')
  cy.resetApp()
 })

 it('Should create an account', () => {
  cy.acessarMenuConta()
  cy.inserirConta('Uma conta de Internet Will')
  cy.get(loc.MESSAGE).should('contain','sucesso!')
  // cy.xpath(loc.MASSAGES.NOME_CONTA).should('exist')
})

it('Changing an account', () => {
  cy.acessarMenuConta()
  cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).should('exist').click()
  cy.get(loc.CONTAS.NOME)
      .clear()
      .type('Uma conta de Internet Will ALTERADA')
  cy.get(loc.CONTAS.BTN_SALVAR).click()
  cy.get(loc.MESSAGE).should('contain', 'sucesso!')
  // cy.xpath('//tbody/tr/td[contains(text(),"Uma conta de Internet Will ALTERADA")]').should('exist')
})

it('Should not create an account with same name', () => {
  cy.acessarMenuConta()
  cy.inserirConta('Uma conta de Internet Will ALTERADA')
  cy.get(loc.MESSAGE).should('contain', 'code 400')
})

it('Should create a transaction', () => {
  cy.get(loc.MENU.MOVIMENTACAO).click()

  cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Conta de Internet')
  cy.get(loc.MOVIMENTACAO.VALOR).type('100')
  cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Will')
  cy.get(loc.MOVIMENTACAO.STATUS).click()
  cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()

  cy.get(loc.MESSAGE).should('contain', 'sucesso')
  cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
  cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')

})
it('Should get balance', () => {
  cy.get(loc.MENU.HOME).click()
  cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para alterar')).should('contain', '100')
})
})