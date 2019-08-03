export const visit = () => cy.visit('/')

export const getApp = () => cy.get('#app')

export const getItems = () =>
  getApp()
    .find('.table')
    .find('tbody')

describe('ui', () => {
  beforeEach(visit)

  it('app', () => {
    getApp().should('be.visible')
  })

  it('table', () => {
    getItems().children()
  })
})
