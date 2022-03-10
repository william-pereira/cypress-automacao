/// <reference types='cypress' />
describe('Resize phone', () => {
  it('Shoppe Login', () => {
    cy.viewport(320, 480)
    cy.viewport('iphone-5')
    cy.visit('shopee.com.br/?device=phone', {
      onBeforeLoad: (win) => {
        win.ontouchstart = true
      }
    })
    cy.get('shopee-banner-popup-stateful').shadow().find('.shopee-popup__close-btn').click()
    // cy.xpath('//*[@class="GXALos"]').click()
  })
})
