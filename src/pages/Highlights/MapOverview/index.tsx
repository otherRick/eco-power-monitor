import { Map } from './Map';
import { GeneralStatus } from './GeneralStatus';

export const MapOverview = () => {
  return (
    <div className='text-red-600 justify-center flex flex-1'>
      <GeneralStatus farmSite='Parque Ventos do Agreste' />
      <Map />
    </div>
  );
};
