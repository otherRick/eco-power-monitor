import { Portfolio } from './components/Portfolio';
import { Status } from './components/Status';

export function Header() {
  return (
    <div className='w-full flex justify-between bg-brand-secondary items-center'>
      <Status />
      <Portfolio />
    </div>
  );
}
