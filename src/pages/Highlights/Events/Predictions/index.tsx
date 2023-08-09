import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { Accordion } from '../../../../components/Accordion';
import Table from './components/table';

export const Predictions = () => {
  return (
    <div className='pt-4'>
      <Accordion
        description='no período selecionado'
        counter={10}
        counterText='Alertas preditivos'
        icon={HandRaisedIcon}
      >
        <Table />
      </Accordion>
    </div>
  );
};
