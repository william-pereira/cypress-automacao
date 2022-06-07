const locators = {
  LOGIN: {
    USER: '[data-test="email"]',
    PASSWORD: '[data-test="passwd"]',
    BTN_LOGIN: '.btn'
  },
  MENU: {
      HOME: '[data-test=menu-home]',
      SETTINGS: '[data-test="menu-settings"]',
      CONTAS: '[href="/contas"]',
      RESET: '[href="/reset"]',
      MOVIMENTACAO: '[data-test="menu-movimentacao"]'
  }, 
  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN_SALVAR: '.btn',
    XP_BTN_ALTERAR: '//tbody/tr/td[text()="Uma conta de Internet Will"]'
  },
  MOVIMENTACAO: {
    DESCRICAO: '#descricao',
    VALOR: '[data-test="valor"]',
    INTERESSADO: '#envolvido',
    BTN_SALVAR: '.btn-primary',
    STATUS: '[data-test=status]'
  },
  EXTRATO: {
    LINHAS: '.list-group > li',
    XP_BUSCA_ELEMENTO: "//span[contains(.,'Conta de Internet')]/following-sibling::small[contains(.,'100')]"
  },
  SALDO: {
    FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/../td[2]`
  },
  MESSAGE: '.toast-message'
}

export default locators;