interface LiveStatusProps {
  status: boolean;
}

export const LiveStatus = ({ status }: LiveStatusProps) => {
  return (
    <div
      className={`items-center flex ${
        status ? ' border-red-400' : 'border-gray-400'
      } border rounded-md text-xs w-20 justify-center`}
    >
      {status ? (
        <div className='flex items-center gap-1'>
          <div className='bg-red-500 rounded-full w-2 h-2'></div>
          <p className='font-medium text-red-500'>Real time</p>
        </div>
      ) : (
        <p className='font-medium'>Offline</p>
      )}
    </div>
  );
};
