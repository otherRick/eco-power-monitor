import { Events } from './Events';
import { MapInfo } from './MapInfo';

export default function Highlights() {
  return (
    <div className='flex h-full w-full flex-1'>
      <MapInfo />
      <Events />
    </div>
  );
}
