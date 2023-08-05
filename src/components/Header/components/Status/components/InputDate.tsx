import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export const InputDate = () => {
  return (
    <div className='w-fit items-center gap-3 mr-5 flex cursor-pointer'>
      <div className='bg-black p-1 rounded-md'>
        <CalendarIcon className='w-6 h-6 text-white' />
      </div>
      <div className='flex gap-2'>
        <div>
          <p className='text-xs text-gray-500'>Data</p>
          <p className='text-sm'> 20.20.2020</p>
        </div>
        <div className=' items-end flex'>
          <ChevronDownIcon className='w-5 h-5 items-end flex' />
        </div>
      </div>
    </div>
  );
};
