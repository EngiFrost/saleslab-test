import { FC } from 'react';
import { Analytics } from '../Analytics/Analytics';
import './styles.css';

export const App: FC = () => {
  return <div className="app">
    <Analytics />
  </div>;
};

export default App;
