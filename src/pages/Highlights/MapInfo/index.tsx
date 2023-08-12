import { Map } from '../../../components/Map';
import { LeafMap } from './Map/components/leafMap';
import { GeneralStatus } from './GeneralStatus';

export const MapInfo = () => {
  return (
    <div className='text-red-600 justify-center  flex flex-1'>
      <GeneralStatus farmSite='Parque Ventos do Agreste' />
      <LeafMap />
      {/* <Map /> */}
    </div>
  );
};
