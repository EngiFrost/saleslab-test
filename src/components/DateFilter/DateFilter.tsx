import { FC, useState } from 'react';
import { TFilter } from './entity';
import './styles.css'

export const DateFilter: FC = () => {
  const filters: TFilter[] = [
    { label: 'Month', value: 'month' },
    { label: 'Week', value: 'week' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Today', value: 'today' },
  ];

  const [value, setValue] = useState<string>('month');

  const handleFilterChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className='wrapper'>
      {filters.map((filter) => (
        <div 
          className="filter" 
          onClick={() => handleFilterChange(filter.value)} 
          style={value === filter.value ? { color: '#3D8FEC' } : {}}
        >        
          {filter.label}
        </div>
      ))}
    </div>
  );
};
