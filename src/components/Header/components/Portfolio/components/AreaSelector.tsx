import { ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

export const AreaSelector = () => {
  return (
    <div className='flex items-center justify-between bg-brand-primary_light rounded-md p-2  hover:bg-brand-orange hover:bg-opacity-10 cursor-pointer max-w-[258px] w-full '>
      <p className='text-brand-orange font-normal text-md'>Parque Ventos do Agreste</p>
      <div className='flex'>
        <ChevronUpDownIcon className='w-4 h-4 text-brand-orange ' />
        <XMarkIcon className='w-4 h-4 text-brand-orange' />
      </div>
    </div>
  );
};
