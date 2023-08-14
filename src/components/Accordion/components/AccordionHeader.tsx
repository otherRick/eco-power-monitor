import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { IconType } from '../../Sidebar/SidebarMenuLinks';

interface AccordionHeaderProps {
  onClick: () => void;
  toggleAccordion: boolean;
  counterText: string;
  counter: number;
  description: string;
  icon: IconType;
}

export const AccordionHeader = ({
  onClick,
  toggleAccordion,
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing',
  counterText = 'Riscos',
  counter,
  icon: Icon
}: AccordionHeaderProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-2 max-h-[51px] bg-brand-grey14 ${
        toggleAccordion && 'border-b-0'
      } border max-w-[733.5px] border-brand-contour rounded-tr-md rounded-tl-md flex items-center justify-between cursor-pointer`}
    >
      <div className=' p-1 w-full gap-4 items-center flex'>
        <Icon className='w-5 h-5 text-brand-grey8' />
        <div className=' bg-brand-grey2 rounded-sm items-center flex justify-center max-w-[29px] w-full max-h-[27px] h-full'>
          <p className='text-white text-sm py-1 px-1.5'>{counter}</p>
        </div>
        <p className='text-md text-left text-brand-grey2'>{counterText}</p>
        <p className='text-brand-grey8 text-sm text-left'>{description}</p>
      </div>
      {toggleAccordion ? (
        <ChevronUpIcon className='w-5 h-5' />
      ) : (
        <ChevronDownIcon className='w-5 h-5' />
      )}
    </div>
  );
};
