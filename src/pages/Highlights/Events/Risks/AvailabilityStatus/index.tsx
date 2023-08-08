import { Divider } from '../../../../../components/Divider';
import { Availability } from './Availability';
import { AvailabilityChart } from './AvailabilityChart/AvailabilityChart';

export const AvailabilityStatus = () => {
  return (
    <div className='border border-brand-contour rounded-md'>
      <Availability />
      <Divider />
      <AvailabilityChart />
    </div>
  );
};
