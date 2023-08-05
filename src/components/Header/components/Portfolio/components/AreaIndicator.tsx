import { ChevronRightIcon } from '@heroicons/react/20/solid';

export const AreaIndicator = () => {
  return (
    <div className='flex items-center cursor-pointer'>
      <div>
        <p className='text-xs  text-gray-400 font-normal '>Visualizando</p>
        <p className='text-lg font-normal '>Protifólio</p>
      </div>
      <div className='flex self-end'>
        <ChevronRightIcon className='w-5 h-5 text-gray-400' />
      </div>
    </div>
  );
};
