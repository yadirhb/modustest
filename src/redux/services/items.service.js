import axios from 'axios';

export class ItemsService {
  constructor(){
    this.axios = axios;
  }
  async getItems() {
    return await axios.get('/items');
  }
}

export default new ItemsService();