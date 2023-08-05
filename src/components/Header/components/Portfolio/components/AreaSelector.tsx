import { ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

export const AreaSelector = () => {
  return (
    <div className='flex items-center gap-2 bg-brand-primary_light rounded-md p-2 cursor-pointer'>
      <p className='text-brand-orange font-normal'>Parque Ventos do Agreste</p>
      <div>
        <ChevronUpDownIcon className='w-4 h-4 text-brand-orange ' />
      </div>
      <XMarkIcon className='w-4 h-4 text-brand-orange' />
    </div>
  );
};
