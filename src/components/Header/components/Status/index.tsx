import { LiveStatus } from './components/LiveStatus';
import { PageTitle } from './components/PageTitle';
import { InputDate } from './components/InputDate';

interface StatusProps {
  status: boolean;
}

export const Status = ({ status }: StatusProps) => {
  return (
    <div className=' border-r border-brand-contour w-3/5 justify-between flex flex-1 p-3'>
      <div className='flex gap-2 items-center'>
        <PageTitle />
        <LiveStatus status={status} />
      </div>
      <InputDate />
    </div>
  );
};
