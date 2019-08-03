import { visit, getItems } from './ui.spec.js'

const options = {
  url: 'https://api.airtable.com/v0/appnQCOLL3KAWz0F7/shops',
  headers: {
    Authorization: 'Bearer keyTAUzh1Wr2pvZzv'
  }
}

describe('api', () => {
  const fetchItems = () => cy.request(options)

  const addItem = fields =>
    cy.request(
      Object.assign({}, options, {
        method: 'POST',
        body: {
          fields
        }
      })
    )

  it('get records', () => {
    fetchItems()
      .its('body.records')
      .should('be.length.gt', 0)
  })

  it('add record', () => {
    return

    beforeEach(visit)

    getItems()
      .find('tr')
      .then(items => items.length)
      .then(itemsLength => {
        addItem({
          name_ko: 'api.spec.js',
          tel: '02-2638-2750',
          hours_start: '10:30',
          hours_end: '22:00',
          href:
            'https://www.google.com/maps/place/타임스퀘어/@37.5171711,126.9009994,17z/data=!4m8!1m2!2m1!1z7YOA7J6E7Iqk7YCY7Ja0IOyYgeuTse2PrOygkA!3m4!1s0x357c9efb5c30862...',
          image: [
            {
              url:
                'https://dl.airtable.com/f3LtsqUmQgeNghIh0gxT_W003_Timesquare.jpg'
            }
          ],
          address_ko: '서울 영등포구 영중로 15 (영등포동4가, 타임스퀘어) 1층',
          area: 'seoul',
          geo: '37.5171711,126.9009994'
        })

        fetchItems()
          .its('body.records')
          .should('have.length', itemsLength + 1)
      })
  })
})
