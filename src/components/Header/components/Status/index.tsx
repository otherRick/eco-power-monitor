import { LiveStatus } from './components/LiveStatus';
import { PageTitle } from './components/PageTitle';
import { InputDate } from './components/InputDate';

export const Status = () => {
  return (
    <div className='border border-1 border-l-0 border-brand-contour  w-[970px] justify-between flex p-3'>
      <div className='flex gap-2 items-center'>
        <PageTitle />
        <LiveStatus status={true} />
      </div>
      <InputDate />
    </div>
  );
};
