import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface ItemArrowProps {
  title?: string | boolean | undefined;
  selected: boolean;
}

export const ItemArrow = ({ title, selected }: ItemArrowProps) => {
  return (
    <div className='w-full justify-between flex'>
      <p className={`text-zinc-400 ${selected && `text-zinc-800 font-bold`}`}>{title}</p>
      {title !== 'Configurações' && title !== 'Sair da conta' ? (
        <ChevronRightIcon className={`w-5 h-5 mr-6 ${selected && `text-zinc-800 font-bold`} `} />
      ) : null}
    </div>
  );
};
