import { formatISO, startOfWeek, endOfWeek } from 'date-fns';
import API_ENDPOINT from '../globals/api-endpoint';

class NewsApi {
  static _getStartEndWeek() {
    const startWeek = formatISO(startOfWeek(new Date()));
    const endWeek = formatISO(endOfWeek(new Date()));
    return `from=${startWeek}&to=${endWeek}`;
  }

  static async getNews(query, maxResult) {
    const response = await fetch(`${API_ENDPOINT.NEWS}&q=${query}&max=${maxResult}&${this._getStartEndWeek()}`);
    const json = await response.json();
    return json.articles;
  }
}

export default NewsApi;
