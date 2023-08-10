import { Occurrences } from './Occurrences';
import { Predictions } from './Predictions';
import { Risks } from './Risks';

export const Events = () => {
  return (
    <div className='px-4 flex flex-col bg-white flex-1 max-w-[769px] sm:overflow-y-auto '>
      <p className='pb-2 pt-6 text-md '>
        Eventos em destaque que ocorreram no período selecionado
      </p>
      <Risks />
      <Predictions />
      <Occurrences />
    </div>
  );
};
