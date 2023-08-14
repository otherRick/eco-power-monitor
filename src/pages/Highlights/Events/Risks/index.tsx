import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Accordion } from '../../../../components/Accordion';
import { GoalsAnalyses } from './GoalsAnalyses';
import { AvailabilityStatus } from './AvailabilityStatus';

export const Risks = () => {
  return (
    <div className='pt-4'>
      <Accordion
        description='no período selecionado'
        counter={19}
        counterText='Riscos'
        icon={ExclamationTriangleIcon}
      >
        <GoalsAnalyses />
        <AvailabilityStatus />
      </Accordion>
    </div>
  );
};
