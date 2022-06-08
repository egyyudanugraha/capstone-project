const url = process.env.BASE_URL_API;
const urlNews = process.env.BASE_URL_NEWS;
const apiKey = process.env.API_KEY;

const CONFIG = {
  BASE_URL: url,
  BASE_NEWS_URL: `${urlNews}?token=${apiKey}`,
};

export default CONFIG;
