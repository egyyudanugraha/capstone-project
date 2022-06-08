const url = 'https://apptivity-api-v3.herokuapp.com';
const urlNews = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2';
const apiKey = '0b212ed8acb84037b9729a1ee40744fc';

const CONFIG = {
  BASE_URL: url,
  BASE_NEWS_URL: (path) => `${urlNews}/${path}?apiKey=${apiKey}`,
};

export default CONFIG;
