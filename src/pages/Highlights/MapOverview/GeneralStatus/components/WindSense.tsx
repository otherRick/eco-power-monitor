import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useBooleanPerSecond } from '../../../../../util';

export const WindSense = () => {
  const wind = useBooleanPerSecond('normal') ? 3.9 : 3.8;

  return (
    <div className='flex flex-col px-2 items-start border-l border-brand-grey7'>
      <div className='flex gap-1 items-center justify-center'>
        <p className='text-brand-grey2 text-ml'>{wind}</p>
        {wind > 3.8 ? (
          <ArrowUpIcon className='w-3 h-3 text-brand-grey2 ' />
        ) : (
          <ArrowDownIcon className='w-3 h-3 text-brand-grey2 ' />
        )}
      </div>
      <p className='text-brand-grey6 text-sm'>Vento (m/s)</p>
    </div>
  );
};
