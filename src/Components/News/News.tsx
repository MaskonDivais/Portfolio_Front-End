import React, { useState, useEffect } from 'react';
import module from './News.module.css';

interface NewsProps {
  items: string[];
  count: number;
}

const News: React.FC<NewsProps> = ({ items, count }) => {

  interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
  }

  const [news, setNews] = useState<Article[]>([]);

  const fetchNews = async () => {
    let fetchedNews: Article[] = [];
    let pageNumber = 1;
    const pageSize = 8;

    while (fetchedNews.length < pageSize) {
      var url = `https://newsapi.org/v2/everything?q=music&pageSize=${pageSize}&page=${pageNumber}&sortBy=popularity&apiKey=9f16f226dbd54360aa4faefe09639f15`;
      var req = new Request(url);

      try {
        let response = await fetch(req);
        let data = await response.json();

        // Фильтрация и добавление новостей с изображениями
        const filteredNews = data.articles.filter((item: Article) => item.urlToImage !== null);
        fetchedNews = fetchedNews.concat(filteredNews);
        pageNumber++;
      } catch (error) {
        console.error('Ошибка при получении новостей:', error);
        break;
      }
    }

    setNews(fetchedNews.slice(0, pageSize)); // Устанавливаем только первые pageSize новостей
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={module.ContNews}>
      <p className={module.TNews}>News</p>

      {news.map((item, index) => (
        <div key={index} className={module.Elem}>
          {item.urlToImage && <img src={item.urlToImage} className={module.ElemImg} alt="..." />}
          <h5 className={module.EH5}>{item.title}</h5>
          <p className={module.EP}>{item.description}</p>
          <a href={item.url} target="_blank" className={module.ElemURl}>Go Source</a>
        </div>
      ))}

    </div>
  );
};

export default News;
