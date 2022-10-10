import { FC } from 'react';
import { Card } from '../Card/Card';
import { TCard } from '../Card/entity';
import './styles.css';

export const Analytics: FC = () => {
  const cards: TCard[] = [
    {
      amount: 123,
      color: 'purple',
      img: '',
      title: 'Won',
      money: 108000, // TODO: format money (add spaces)
    },
    {
      amount: 123,
      color: 'green',
      img: '',
      title: 'Won',
      money: 108000, // TODO: format money (add spaces)
    },
    {
      amount: 123,
      color: 'red',
      img: '',
      title: 'Won',
    },
  ];

  return (
    <div className="analytics">
      <div className="header"></div>
      <div className="cards">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};
