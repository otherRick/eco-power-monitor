import { Portfolio } from './components/Portfolio';
import { Status } from './components/Status';

export function Header() {
  return (
    <div className='flex border-b border-brand-contour max-h-[56px] justify-between bg-brand-secondary items-center'>
      <Status status={true} />
      <Portfolio />
    </div>
  );
}
