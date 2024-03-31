import React from 'react';
import module from './News.module.css';

interface Props {
  items: string[]; // Укажите тип элементов массива, если это строки
  count: number; // Количество элементов, которые нужно отобразить
}

const News: React.FC<Props> = ({ items, count }) => {
  const numRows = Math.ceil(count / 2); // Предполагаем, что таблица будет содержать по 3 элемента в каждой строке

  // Функция для создания ячеек таблицы
  const renderCells = () => {
    const cells = [];

    // Создаем ячейки для каждого элемента
    for (let i = 0; i < count; i++) {
      cells.push(
        <div key={i} className={module.Cell}>
          {items[i]}
        </div>
      );
    }

    // Добавляем пустые ячейки, чтобы заполнить последний ряд
    const remainingCells = numRows * 2 - count;
    for (let i = 0; i < remainingCells; i++) {
      cells.push(<div key={`empty-${i}`} className="cell empty"></div>);
    }

    return cells;
  };

  return (
    <div className={module.ContNews}>
      <p className={module.TNews}>News</p>

      {/* Создаем строки таблицы */}
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <div key={rowIndex} className={module.Row}>
          {/* Создаем ячейки для каждой строки */}
          {renderCells().slice(rowIndex * 2, (rowIndex + 1) * 2)}
        </div>
      ))}
    </div>
  );
};

export default News;
