import { AreaIndicator } from './components/AreaIndicator';
import { AreaSelector } from './components/AreaSelector';

export const Portfolio = () => {
  return (
    <div className='border border-1 border-l-0 border-r-0 border-brand-contour p-3 gap-2 flex'>
      <AreaIndicator />
      <AreaSelector />
    </div>
  );
};
