const locators = {
  LOGIN: {
    USER: '[data-test="email"]',
    PASSWORD: '[data-test="passwd"]',
    BUTTON_LOGIN: '.btn'
  },
  MENU: {
      SETTINGS: '[data-test="menu-settings"]',
      CONTAS: '//div[@class="dropdown-menu bg-dark show"]/a[1]'
  }, 
  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN_SALVAR: '.btn',
    XP_BTN_ALTERAR: '//tbody/tr/td[text()="Uma conta de Internet Will"]'
  },
  MASSAGE: '.toast-message'
}

export default locators;