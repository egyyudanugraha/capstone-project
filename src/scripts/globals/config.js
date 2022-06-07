const url = 'https://apptivity-api-v3.herokuapp.com';
const urlNews = 'https://newsapi.org/v2';
const apiKey = '0b212ed8acb84037b9729a1ee40744fc';

const CONFIG = {
  BASE_URL: url,
  BASE_IMAGE_LARGE_URL: `${url}/article/image/large/`,
  BASE_IMAGE_MEDIUM_URL: `${url}/article/image/medium/`,
  BASE_IMAGE_SMALL_URL: `${url}/article/image/small/`,
  BASE_NEWS_URL: (path) => `${urlNews}/${path}?apiKey=${apiKey}`,
};

export default CONFIG;
