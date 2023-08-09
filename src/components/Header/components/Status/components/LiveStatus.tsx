import { BooleanPerSecond } from '../../../../../Util';

interface LiveStatusProps {
  status: boolean;
}

export const LiveStatus = ({ status }: LiveStatusProps) => {
  const transition = 'ransition-colors duration-500 ease-in-out';
  const liveAnimation = BooleanPerSecond('fast') ? `500 ${transition}` : `400 ${transition}`;

  return (
    <div
      className={`items-center flex ${
        status ? `border-red-${liveAnimation}` : 'border-gray-400'
      }  border rounded-md text-xs w-20 justify-center`}
    >
      {status ? (
        <div className='flex items-center gap-1'>
          <div className={`bg-red-${liveAnimation} rounded-full w-2 h-2`}></div>
          <p className={`font-medium text-red-${liveAnimation}`}>Real time</p>
        </div>
      ) : (
        <p className='font-medium'>Offline</p>
      )}
    </div>
  );
};
