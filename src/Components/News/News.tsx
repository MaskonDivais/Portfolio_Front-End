import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElemNews from './Elem/ElemNews';
import styles from './News.module.css';

interface Article {
  title: string;
  urlToImage: string;
  description: string;
  url: string;
  publishedAt: string;
  author: string;
}

const News: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 12;

  useEffect(() => {
    const storedNews = sessionStorage.getItem('savedNews'); // Заменяем localStorage на sessionStorage
    if (storedNews) {
      setNews(JSON.parse(storedNews));
      setLoading(false);
    } else {
      const fetchNews = async () => {
        try {
          const url = `https://newsapi.org/v2/everything?q=music%20AND%20(image%20OR%20photo%20OR%20picture%20OR%20photograph)&language=en&pageSize=100&sortBy=relevancy&apiKey=9f16f226dbd54360aa4faefe09639f15`;
          const response = await axios.get<{ articles: Article[] }>(url);

          const articlesWithImages: Article[] = response.data.articles.filter((item: Article) => item.urlToImage !== null);
          console.log('Response...');

          if (articlesWithImages.length > 0) {
            setNews(articlesWithImages);
            sessionStorage.setItem('savedNews', JSON.stringify(articlesWithImages)); // Заменяем localStorage на sessionStorage
            setLoading(false);
          } else {
            console.log('Новости без изображений не найдены.');
          }
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };

      fetchNews();
    }
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.Cont}>
      <div className={styles.ContText}>
        <p className={styles.TNews}>Actual News</p>
      </div>

      <div className={styles.ContNews}>
        {loading ? (
          <div>Autorisation...</div>
        ) : (
          currentPosts.map(newsItem => (
            <ElemNews key={newsItem.url} news={newsItem} />
          ))
        )}
      </div>

      <div className={styles.ContNav}>
        {Array.from({ length: Math.ceil(news.length / postsPerPage) }).map((_, index) => (
          <div
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? styles.PageElemActive : styles.PageElem}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
