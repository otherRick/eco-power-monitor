import { LiveStatus } from './components/LiveStatus';
import { PageTitle } from './components/PageTitle';
import { InputDate } from './components/InputDate';

export const Status = () => {
  return (
    <div className=' border-r border-brand-contour justify-between flex flex-1 p-3'>
      <div className='flex gap-2 items-center'>
        <PageTitle />
        <LiveStatus status={true} />
      </div>
      <InputDate />
    </div>
  );
};
