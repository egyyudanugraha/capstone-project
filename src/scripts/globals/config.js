const url = `${process.env.URL_API}`;
const urlNews = `${process.env.URL_NEWS}`;
const apiKey = `${process.env.API_KEY}`;

const CONFIG = {
  BASE_URL: url,
  BASE_NEWS_URL: (path) => `${urlNews}/${path}?apiKey=${apiKey}`,
};

export default CONFIG;
