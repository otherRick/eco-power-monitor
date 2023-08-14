import { Events } from './Events';
import { MapOverview } from './MapOverview';

export default function Highlights() {
  return (
    <div className='flex h-full'>
      <MapOverview />
      <Events />
    </div>
  );
}
