import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { AvailabilityStatus } from './components/AvailabilityStatus';
import { Accordion } from '../../../../components/Accordion';
import { GoalsAnalyses } from './components/GoalsAnalyses';

export const Risks = () => {
  // const annotations = [
  //   {
  //     type: 'line',
  //     point: {
  //       x: 0.5, // x-coordinate of the annotation (0.5 means centered on the "Progress" category)
  //       y: 50, // y-coordinate of the annotation (50%)
  //       xAxis: 0,
  //       yAxis: 0
  //     },
  //     color: 'blue', // Color of the annotation line
  //     label: {
  //       text: 'asdafasdasdasd%', // Text label for the annotation
  //       verticalAlign: 'bottom', // Label position relative to the line
  //       align: 'center', // Label alignment
  //       style: {
  //         color: 'red' // Label text color
  //       }
  //     }
  //   }
  // ];

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
