import { Occurrences } from './Occurrences';
import { Predictions } from './Predictions';
import { Risks } from './Risks';

export const Events = () => {
  return (
    <div>
      <p className='pb-2 pt-6 text-md'>Eventos em destaque que ocorreram no período selecionado</p>
      <Risks />
      <Predictions />
      <Occurrences />
    </div>
  );
};
