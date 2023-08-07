import { AreaIndicator } from './components/AreaIndicator';
import { AreaSelector } from './components/AreaSelector';

export const Portfolio = () => {
  return (
    <div className='p-3 gap-2 flex'>
      <AreaIndicator />
      <AreaSelector />
    </div>
  );
};
