import React from 'react';
import module from './ElemNews.module.css';
import { motion } from 'framer-motion';

export interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
}

export interface ElemNewsProps {
  news: News;
}

// Function for changing date format.
function formatDate(isoDate: string): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(isoDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = months[monthIndex];

  return `${formattedDay} ${formattedMonth} ${year}`;
}
// End Function for changing date format.

// Function for changing Tile format.
function truncateTitle(title: string, maxLength: number): string {
  if (title.length > maxLength) {
      return title.substring(0, maxLength - 3) + '...';
  } else {
      return title;
  }
}
// End Function for changing Tile format.


// Function for changing Tile format.
function truncateDescription(description: string, maxLengthD: number): string {
  if (description.length > maxLengthD) {
      return description.substring(0, maxLengthD - 3) + '...';
  } else {
      return description;
  }
}
// End Function for changing Tile format.
let maxLength: number = 45;
let maxLengthD: number = 185;

const ElemNews: React.FC<ElemNewsProps> = ({ news }) => {
  return (
    <div className={module.ContElem}>
      <img src={news.urlToImage} className={module.ElemImg} alt="News"></img>
      <p className={module.Date}>{formatDate(news.publishedAt)}</p>

      <motion.div
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      className={module.ContOver}
      whileHover={{ 
        y: -100
      }}
    >

      <p className={module.PA}>{news.author}</p>
      <h5 className={module.EH5}>{truncateTitle(news.title, maxLength)}</h5>
      <p className={module.EP}>{truncateTitle(news.description, maxLengthD)}</p>
      <a href={news.url} target="_blank" rel="noopener noreferrer" className={module.ElemURl}>Go Source</a>
      </motion.div>
    </div>
  );
}

export default ElemNews;
