import keyBy from 'lodash/keyBy'

const areas = keyBy(
  [
    { k: 'seoul', v: '서울' },
    { k: 'gyeonggi', v: '경기' },
    { k: 'incheon', v: '인천' },
    { k: 'daegu', v: '대구' },
    { k: 'pusan', v: '부산' }
  ],
  'k'
)

const getters = {
  items: state =>
    state.items.map(
      ({
        id,
        fields: { name_ko, address_ko, area, hours_start, hours_end, ...rest }
      }) => ({
        id,
        name: name_ko,
        address: address_ko,
        area: areas[area].v,
        hours: `${hours_start} ~ ${hours_end}`,
        ...rest
      })
    ),
  item: state => id => state.items.find(item => item.id === id),
  total: state => state.items.length
}

export default getters
