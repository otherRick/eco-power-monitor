import { useEffect, useRef, useState } from 'react';
import { Scada } from '../../../../../../components/icons/scada';
import { useBooleanPerSecond } from '../../../../../../util';

import { ApiData } from '../ApiData';
import { CheckIcon } from '@heroicons/react/20/solid';

export const TableBody = () => {
  const booleanPerSecond = useBooleanPerSecond('fast');

  const [data, setData] = useState(ApiData);
  const [checked, setChecked] = useState<number[]>([]);
  const [checkAction, setCheckAction] = useState<number[]>([]);

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const inputActionRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, data.length);
    inputActionRefs.current = inputActionRefs.current.slice(0, data.length);
  }, [data]);

  const handleApproveChange = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setData(updatedData);
  };
  const handleActionChange = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, approved: !item.approved } : item
    );

    setData(updatedData);
  };

  const handleCheck = (index: number) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    } else {
      setChecked([...checked, index]);
    }
    inputRefs.current[index].click();
  };

  const handleCheckAction = (index: number) => {
    if (checkAction.includes(index)) {
      setCheckAction(checkAction.filter((item) => item !== index));
    } else {
      setCheckAction([...checkAction, index]);
    }

    if (inputActionRefs.current[index]) {
      inputActionRefs.current[index].click();
    }
  };
  return (
    <tbody>
      {data.map((item, index: number) => {
        return (
          <tr>
            <div
              className={`${
                index % 2 && 'bg-brand-grey14'
              }  text-brand-grey6  text-ms font-medium w-full gap-4 flex`}
              key={item.id}
            >
              <td>
                <div className='flex w-16 h-16 justify-center items-center'>
                  <p>{item.id}</p>
                </div>
              </td>
              <td>
                <div className='flex w-16 h-16 items-center justify-center'>
                  <Scada />
                  <div
                    className={`${
                      booleanPerSecond ? 'bg-red-500' : 'bg-red-400'
                    } rounded-full w-2 h-2`}
                  ></div>
                </div>
              </td>
              <td>
                <p className='text-brand-grey2 w-28 h-16 items-center flex overflow-hidden truncate'>
                  {item.alarm}
                </p>
              </td>
              <td>
                <div className='w-20 h-16 flex items-center justify-center'>{item.assetType}</div>
              </td>
              <td>
                <div className='w-24 h-16 items-center flex'>{item.asset}</div>
              </td>
              <td>
                <div className='w-24 h-16 items-center  justify-center text-center flex'>
                  {item.system}
                </div>
              </td>
              <td>
                <div className=' w-20 h-16 items-center flex text-center'>{item.resp}</div>
              </td>
              <td>
                <div className='w-16 h-16 justify-center items-center flex'>
                  <div
                    onClick={() => handleCheckAction(index)}
                    className={`${
                      item.isChecked && 'bg-brand-green2'
                    } rounded-full w-6 h-6 cursor-pointer border border-brand-grey9 flex items-center justify-center`}
                  >
                    {checkAction.includes(index) && (
                      <CheckIcon className='w-5 h-5 text-white font-bold' />
                    )}
                  </div>
                  <input
                    type='checkbox'
                    hidden
                    ref={(el) => {
                      if (el) {
                        if (inputActionRefs.current) {
                          inputActionRefs.current[index] = el;
                        }
                      }
                    }}
                    checked={item.isChecked}
                    onChange={() => handleApproveChange(item.id)}
                  />
                </div>
              </td>
              <td>
                <div className='w-16 h-16 justify-center  items-center flex '>
                  <div
                    onClick={() => handleCheck(index)}
                    className={`border border-solid w-7 h-7 cursor-pointer flex items-center justify-center`}
                  >
                    {checked.includes(index) && <CheckIcon className='w-5 h-5' />}
                  </div>
                  <input
                    type='checkbox'
                    hidden
                    ref={(el) => {
                      if (el) {
                        if (inputRefs.current) {
                          inputRefs.current[index] = el;
                        }
                      }
                    }}
                    checked={item.approved}
                    onChange={() => handleActionChange(item.id)}
                  />
                </div>
              </td>
            </div>
          </tr>
        );
      })}
    </tbody>
  );
};
