describe('store', () => {
  beforeEach(() => cy.visit('/'))

  const getRouter = () => cy.window().its('app.$router')
  const getStore = () => cy.window().its('app.$store')

  it('state', () => {
    getStore()
      .its('state')
      .should('have.keys', ['stores', 'wait'])
  })

  it('action', () => {
    getStore().then(store => {
      store.dispatch('stores/fetchItem', 'reck2YbOrBFiIEHZI')
    })

    getRouter().then(router => {
      router.push('/stores/form/reck2YbOrBFiIEHZI')

      cy.get('#name_ko').should('have.value', '타임스퀘어점')
    })
  })

  it('action with http', () => {
    cy.server()
    cy.route({
      method: 'PATCH',
      url:
        'https://api.airtable.com/v0/appnQCOLL3KAWz0F7/shops/reck2YbOrBFiIEHZI'
    }).as('patchItem')

    const newNameKo = '타임스퀘어점'

    getStore().then(store => {
      store.dispatch('stores/patchItem', {
        id: 'reck2YbOrBFiIEHZI',
        fields: {
          name_ko: newNameKo
        }
      })
    })

    cy.wait('@patchItem')
      .its('request.body.fields.name_ko')
      .should('eq', newNameKo)
  })

  it('getters', () => {
    cy.wait(1000)

    getStore().then(store => {
      const item = store.getters['stores/item']('reck2YbOrBFiIEHZI')

      cy.wrap(item)
        .its('fields.name_ko')
        .should('eq', '타임스퀘어점')
    })
  })
})
