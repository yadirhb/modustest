import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ItemsService } from './items.service';
import items from '../../common/data.json';

// This sets the mock adapter on the default instance
const delayResponse = 200;
const mock = new MockAdapter(axios, {delayResponse});

class ItemsServiceMock extends ItemsService {
  async getItems() {
    mock.onGet('/items').reply(200, {
      items: items //
    });

    const data = await super.getItems();
    return data.data.items;
  }

  async search(criteria) {
    if (criteria && typeof (criteria) == 'string' && /^[a-z0-9]+$/i.test(criteria)) {
      const criterias = criteria.split(",");
      mock.onGet('/search').reply(200, {
        items: items.filter(item => {
          for (let i in criterias) {
            let c = criterias[i];
            if (item.name.includes(c) || item.sector.includes(c)) return true;
          }
          return false;
        }) //
      });
    } else {
      mock.onGet('/search').reply(504, { message:"Invalid character set. Must be alphanum." });
    }

    const data = await super.search(criteria);
    return data.data.items;
  }
}

export default new ItemsServiceMock();