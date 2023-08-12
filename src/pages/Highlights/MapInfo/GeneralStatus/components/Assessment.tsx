import { useEffect, useState } from 'react';

export const Assessment = ({ avaliation = 2 }) => {
  const one = avaliation >= 1 && true;
  const two = avaliation >= 2 && true;
  const three = avaliation >= 3 && true;
  const four = avaliation >= 4 && true;
  const five = avaliation >= 5 && true;
  return (
    <div className='h-10 flex-col items-center flex p-1 pr-2'>
      <div className='flex'>
        <div className='gap-1 flex w-11 h-5 items-end'>
          {one ? (
            <div
              className={`max-h-[9px] transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
                avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
              }`}
            ></div>
          ) : (
            <div className={`max-h-[9px] w-2 h-full rounded-sm bg-brand-grey6`}></div>
          )}
          {two ? (
            <div
              className={`max-h-[12px] transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
                avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
              }`}
            ></div>
          ) : (
            <div className={`max-h-[12px] w-2 h-full rounded-sm bg-brand-grey6`}></div>
          )}
          {three ? (
            <div
              className={`max-h-[15px] transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
                avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
              }`}
            ></div>
          ) : (
            <div className={`max-h-[15px] w-2 h-full rounded-sm bg-brand-grey6`}></div>
          )}
          {four ? (
            <div
              className={`max-h-[18px] transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
                avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
              }`}
            ></div>
          ) : (
            <div className={`max-h-[18px] w-2 h-full rounded-sm bg-brand-grey6`}></div>
          )}
          {five ? (
            <div
              className={`max-h-[20px] transition-colors duration-500 ease-in-out  w-2 h-full rounded-sm ${
                avaliation < 4 ? ' bg-brand-yellow3' : ' bg-brand-green2'
              }`}
            ></div>
          ) : (
            <div className={`max-h-[20px] w-2 h-full rounded-sm bg-brand-grey6`}></div>
          )}
        </div>
      </div>
      <p className='text-brand-grey6 text-sm'>Avaliação</p>
    </div>
  );
};
