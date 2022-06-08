const url = 'https://apptivity-api-v3.herokuapp.com';
const urlNews = 'https://gnews.io/api/v4/search';
const apiKey = '745cbe9620ef2d4ddf855fa58340352b';

const CONFIG = {
  BASE_URL: url,
  BASE_NEWS_URL: `${urlNews}?token=${apiKey}`,
};

export default CONFIG;
