import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ItemsService } from './items.service';
import items from '../../common/data.json';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

class ItemsServiceMock extends ItemsService {
  async getItems() {
    mock.onGet('/items').reply(200, {
      delayResponse: 200,
      items: items //
    });

    const data = await super.getItems();
    return data.data.items;
  }
}

export default new ItemsServiceMock();