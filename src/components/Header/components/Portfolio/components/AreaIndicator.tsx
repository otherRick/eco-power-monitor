import { ChevronRightIcon } from '@heroicons/react/20/solid';

export const AreaIndicator = () => {
  return (
    <div className='flex ml-4 items-center cursor-pointer'>
      <div>
        <p className='text-xs text-gray-400 font-normal '>Visualizando</p>
        <p className='text-md font-normal '>Portifólio</p>
      </div>
      <div className='flex self-end'>
        <ChevronRightIcon className='w-5 h-5 text-gray-400' />
      </div>
    </div>
  );
};
