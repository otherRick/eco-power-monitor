import { useBooleanPerSecond } from '../../../../../util';

interface LiveStatusProps {
  status: boolean;
}

export const LiveStatus = ({ status }: LiveStatusProps) => {
  const transition = 'transition-colors duration-500 ease-in-out';
  const booleanPerSecond = useBooleanPerSecond('fast');

  return (
    <div
      className={`items-center flex ${
        status
          ? `${
              booleanPerSecond
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
              booleanPerSecond ? `bg-brand-red2 ${transition}` : `bg-brand-primary ${transition}`
            } rounded-full w-2 h-2`}
          ></div>
          <p
            className={`font-medium text-ms ${
              booleanPerSecond
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
