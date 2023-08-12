import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface TagSenseProps {
  title: string;
  value: string;
  tagColor?: '' | 'red' | 'yellow' | 'orange' | 'default';
}

export const TagSense = ({ title = 'Sem sinal', value = '02', tagColor }: TagSenseProps) => {
  let color = 'bg-brand-grey11';
  switch (tagColor) {
    case 'red':
      color = 'bg-brand-red3';
      break;
    case 'yellow':
      color = 'bg-brand-yellow3';
      break;
    case 'orange':
      color = 'bg-brand-orange7';
      break;
    default:
      color;
      break;
  }
  return (
    <div className='flex cursor-pointer w-fit h-8 bg-brand-grey13 items-center '>
      <div className={`${color} w-8 h-8 flex items-center text-brand-grey2 justify-center`}>
        {value}
      </div>
      <div className='flex items-center ml-2'>
        <p className='text-brand-grey2 text-ms'>{title}</p>
        <ChevronRightIcon className='w-5 h-5 text-brand-grey7' />
      </div>
    </div>
  );
};
