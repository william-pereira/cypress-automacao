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
      MOVIMENTACAO: '[data-test="menu-movimentacao"]',
      EXTRATO: "[data-test=menu-extrato]"
  }, 
  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN_SALVAR: '.btn',
    XP_BTN_ALTERAR: nome => `//tbody/tr/td[text()="${nome}"]`
  },
  MOVIMENTACAO: {
    DESCRICAO: '#descricao',
    VALOR: '[data-test="valor"]',
    INTERESSADO: '#envolvido',
    BTN_SALVAR: '.btn-primary',
    STATUS: '[data-test=status]',
    CONTA: '[data-test=conta]'
  },
  EXTRATO: {
    LINHAS: '.list-group > li',
    XP_BUSCA_ELEMENTO: (nome, qtde) => `//span[contains(.,'${nome}')]/following-sibling::small[contains(., '${qtde}')]`,
    FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`
  },
  SALDO: {
    FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/../td[2]`
  },
  MESSAGE: '.toast-message'
}

export default locators;