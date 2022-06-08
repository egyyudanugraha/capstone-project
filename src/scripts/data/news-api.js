import { formatISO, startOfWeek, endOfWeek } from 'date-fns';
import API_ENDPOINT from '../globals/api-endpoint';

class NewsApi {
  static _getStartEndWeek() {
    const startWeek = formatISO(startOfWeek(new Date()), { representation: 'date' });
    const endWeek = formatISO(endOfWeek(new Date()), { representation: 'date' });
    return `from=${startWeek}&to=${endWeek}`;
  }

  static async getNewsEverything(query) {
    const response = await fetch(`${API_ENDPOINT.NEWS('everything')}&q=${query}&pageSize=8&${this._getStartEndWeek()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'browser',
      },
    });
    const json = await response.json();
    return json.articles;
  }
}

export default NewsApi;
