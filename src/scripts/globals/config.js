const url = 'https://apptivity-api-v3.herokuapp.com';
const urlNews = 'https://gnews.io/api/v4/search';
const apiKey = '745cbe9620ef2d4ddf855fa58340352b';

const CONFIG = {
  BASE_URL: url,
  BASE_IMAGE_LARGE_URL: `${url}/article/image/large/`,
  BASE_IMAGE_MEDIUM_URL: `${url}/article/image/medium/`,
  BASE_IMAGE_SMALL_URL: `${url}/article/image/small/`,
  BASE_NEWS_URL: (query) => `${urlNews}?q=${query}&token=${apiKey}`,
};

export default CONFIG;
