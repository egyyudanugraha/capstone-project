const url = process.env.BASE_URL_API;
const urlNews = process.env.BASE_URL_NEWS;
const apiKey = process.env.API_KEY;

const CONFIG = {
  BASE_URL: url,
  BASE_NEWS_URL: `${urlNews}?token=${apiKey}`,
  CACHE_IMAGE: 'image-cache',
  CACHE_SOUND: 'sound-cache',
  CACHE_TASK: 'task-cache',
  CACHE_MATRIX: 'matrix-cache',
  CACHE_USER: 'user-cache',
  CACHE_FONT: 'font-cache',
  CACHE_ARTICLE: 'article-cache',
  QUEUE_TASK: 'task-queue',
};

export default CONFIG;
