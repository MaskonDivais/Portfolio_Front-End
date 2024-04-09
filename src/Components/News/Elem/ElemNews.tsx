import React from 'react';
import module from './ElemNews.module.css';

export interface News {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export interface ElemNewsProps {
  news: News;
}

const ElemNews: React.FC<ElemNewsProps> = ({ news }) => {
  return (
    <div  className={module.ContElem}>
      <img src={news.urlToImage} className={module.ElemImg} alt="News" />
      <h5 className={module.EH5}>{news.title}</h5>
      <p className={module.EP}>{news.description}</p>
      <a href={news.url} target="_blank" rel="noopener noreferrer" className={module.ElemURl}>Go Source</a>
    </div>
  );
}

export default ElemNews;
