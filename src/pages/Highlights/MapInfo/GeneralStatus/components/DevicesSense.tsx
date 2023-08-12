interface DevicesSenseProps {
  currentDevices: number;
  totalDevices: number;
}

export const DevicesSense = ({ currentDevices, totalDevices }: DevicesSenseProps) => {
  return (
    <div className='flex flex-col px-2 items-start border-l border-brand-grey7'>
      <div className='flex items-end justify-center'>
        <p className='text-brand-grey2 text-ml'>{currentDevices}</p>
        <p className='text-brand-grey6 text-sm'>/{totalDevices}</p>
      </div>
      <p className='text-brand-grey6 text-sm'>Devices</p>
    </div>
  );
};
