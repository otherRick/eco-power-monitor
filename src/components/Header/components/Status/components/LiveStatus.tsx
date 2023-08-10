import { BooleanPerSecond } from '../../../../../Util';

interface LiveStatusProps {
  status: boolean;
}

export const LiveStatus = ({ status }: LiveStatusProps) => {
  const transition = 'transition-colors duration-500 ease-in-out';

  return (
    <div
      className={`items-center flex ${
        status
          ? `${
              BooleanPerSecond('fast')
                ? `border-brand-red2 ${transition}  `
                : `border-brand-primary ${transition}  `
            }`
          : 'border-gray-400'
      }  border rounded-md text-xs w-[88px] h-[27px] justify-center`}
    >
      {status ? (
        <div className='flex items-center gap-1'>
          <div
            className={` ${
              BooleanPerSecond('fast')
                ? `bg-brand-red2 ${transition}`
                : `bg-brand-primary ${transition}`
            } rounded-full w-2 h-2`}
          ></div>
          <p
            className={`font-medium text-ms ${
              BooleanPerSecond('fast')
                ? `text-brand-red2 ${transition}`
                : `text-brand-primary ${transition}`
            }`}
          >
            Real time
          </p>
        </div>
      ) : (
        <p className='font-medium'>Offline</p>
      )}
    </div>
  );
};
