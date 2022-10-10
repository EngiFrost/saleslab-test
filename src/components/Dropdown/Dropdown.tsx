import { FC, useState } from 'react';
import { TItem } from './entity';
import './styles.css';

export const Dropdown: FC = () => {
  const items: TItem[] = [
    { label: 'Sales', value: 'sales' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Partners', value: 'partners' },
  ];

  const arrowUpPath = `${process.env.PUBLIC_URL}/svg/arrow_up.svg`;
  const arrowDownPath = `${process.env.PUBLIC_URL}/svg/arrow_down.svg`;

  const [hidden, setHidden] = useState<boolean>(true);
  const [activeItem, setActiveItem] = useState<string>('sales');

  const handleCollapse = () => {
    setHidden(!hidden);
  };

  const handleItemChange = (value: string) => {
    setActiveItem(value);
  };

  return (
    <div className="dropdown">
      <div className="dropdownHeader">
        All Pipelines
        <img className="icon" src={hidden ? arrowDownPath : arrowUpPath} alt="push me!" onClick={handleCollapse} />
      </div>
      {!hidden && (
        <div className="list">
          {items.map((item) => (
            <div 
              className={`item ${activeItem === item.value ? 'active' : ''}`} 
              onClick={() => handleItemChange(item.value)}
            >
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
