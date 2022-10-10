import { FC } from 'react';
import { Card } from '../Card/Card';
import { TCard } from '../Card/entity';
import './styles.css';

export const Analytics: FC = () => {
  const cards: TCard[] = [
    {
      amount: 1600,
      color: 'purple',
      img: `${process.env.PUBLIC_URL}/svg/snowflake.svg`,
      title: 'Total Leads and Deals',
      money: 132000999,
    },
    {
      amount: 45,
      color: 'green',
      img: `${process.env.PUBLIC_URL}/svg/ok_mark.svg`,
      title: 'Won',
      money: 108000,
    },
    {
      amount: 15,
      color: 'red',
      img: `${process.env.PUBLIC_URL}/svg/cross.svg`,
      title: 'Lost',
      money: 24000,
    },
    {
      amount: 115,
      color: 'blue',
      img: `${process.env.PUBLIC_URL}/svg/person.svg`,
      title: 'New Leads',
    },
    {
      amount: 269,
      color: 'purple',
      img: `${process.env.PUBLIC_URL}/svg/doc.svg`,
      title: 'Total tasks',
    },
    {
      amount: 115,
      color: 'green',
      img: `${process.env.PUBLIC_URL}/svg/doc_ok.svg`,
      title: 'Completed tasks',
    },
    {
      amount: 45,
      color: 'red',
      img: `${process.env.PUBLIC_URL}/svg/doc_cross.svg`,
      title: 'Expired tasks',
    },
    {
      amount: 10,
      color: 'blue',
      img: `${process.env.PUBLIC_URL}/svg/doc_empty.svg`,
      title: 'No tasks',
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
