import axios from 'axios';

export class ItemsService {
  constructor(){
    this.axios = axios;
  }
  async getItems() {
    return await axios.get('/items');
  }

  async search(criteria){
    return await axios.get(`/search`);
  }
}

export default new ItemsService();