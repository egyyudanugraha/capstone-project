import NewsApi from '../../data/news-api';
import {
  cardArticle,
} from '../template/template-creator';

const Article = {
  async render() {
    return `<h3 class="flex justify-center text-2xl leading-6 mb-6 font-medium text-slate-800 dark:text-slate-100">Articles relevant to productivity</h3>
    <div class="articles grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center mx-4 md:mx-8">
    
    </div>`;
  },

  async afterRender() {
    const articlesContent = document.querySelector('.articles');
    articlesContent.innerHTML = '';
    const articles = await NewsApi.getNews('productivity', 10);
    articles.forEach((article) => {
      articlesContent.innerHTML += cardArticle(article);
    });
  },
};

export default Article;
