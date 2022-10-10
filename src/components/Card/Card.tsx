import { FC } from 'react';
import { Colors, TCard } from './entity';
import './styles.css';

type CardProps = {
  card: TCard;
};

export const Card: FC<CardProps> = ({ card }) => {
  const { amount, color, img, title, money } = card;
  const cardColor = Colors[color]

  return (
    <div className="card">
      <div className="section">
        <div className="imgWrapper" style={{backgroundColor: cardColor}}>
          <img src={img} alt={title} />
        </div>
      </div>
      <div className="section">
        <div className="title" style={{color: cardColor}}>{title}</div>
        <div className="info">
          {amount}
          {money && ' | '}
          {money && <span className="money">{formatMoney(money)}</span>}
        </div>
      </div>
    </div>
  );
};

const formatMoney = (value: number): string => {
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}
