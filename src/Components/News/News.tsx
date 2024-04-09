import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import module from './News.module.css';
import ElemNews from './Elem/ElemNews';



const News = () => {

  interface Article {
    title: string;
    urlToImage: string;
    description: string; 
    url: string; 

  }

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<Article[]>([]);


  async function fetchNews(): Promise<void> {
    try {
      var url = 'https://newsapi.org/v2/top-headlines?' +
        'sources=bbc-news&' +
        'apiKey=9f16f226dbd54360aa4faefe09639f15';
      const response = await axios.get<{ articles: Article[] }>(url);

      // Фильтруем статьи, оставляем только те, у которых есть изображение
      const articlesWithImages: Article[] = response.data.articles.filter((item: Article) => item.urlToImage !== null);

      if (articlesWithImages.length > 0) {
        setNews(articlesWithImages);
        setLoading(false);
        console.log(articlesWithImages);
      } else {
        console.log('Новости без изображений не найдены.');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  return (
    <div className={module.Cont}>
      <div className={module.ContText}><p className={module.TNews}>News</p></div>

      <div className={module.ContNews}>
        {loading ?
          <div>loading</div>

          :
          news.map(newsItem => (
            <ElemNews news={newsItem} />
          ))
        }



      </div>
    </div>
  );
};

export default News;
