import { useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Scada } from '../../../../../components/icons/scada';
import { BooleanPerSecond } from '../../../../../Util';
import { ApiData } from './ApiData';

export const Table = () => {
  const [data, setData] = useState(ApiData);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [checked, setChecked] = useState([]);
  const [checkAction, setCheckAction] = useState([]);

  const inputRefs = useRef<HTMLInputElement[] | never>([]);
  const inputActionRefs = useRef<HTMLInputElement[] | never>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, data.length);
    inputActionRefs.current = inputActionRefs.current.slice(0, data.length);
  }, [data]);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.alarm.localeCompare(b.alarm);
      } else {
        return b.alarm.localeCompare(a.alarm);
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

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

  const handleCheck = (index) => {
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
    <table className=' flex flex-col max-w-[733px] w-full'>
      <thead className='w-full max-w-[733px]'>
        <tr>
          <div className='w-full bg-brand-grey10 text-brand-grey6 text-ms gap-4 flex'>
            {/* // --------------- ID */}
            <th>
              <div className='w-16 h-16 flex items-center gap-4 justify-center'>
                <p>ID</p>
                <button onClick={sortData}>
                  <ChevronUpDownIcon className='w-4 h-4' />
                </button>
              </div>
            </th>
            {/* // ---------------ORIGEM STATUS */}
            <th>
              <div>
                <p className='w-16 h-16 flex items-center'>Origem Status</p>
              </div>
            </th>
            {/* // --------------- ALARME */}
            <th>
              <div className='w-28 h-16 text-center items-center justify-center flex gap-4 '>
                Alarme
                <button onClick={handleSort}>
                  <ChevronUpDownIcon className='w-4 h-4' />
                </button>
              </div>
            </th>
            {/* // --------------- ASSET TYPE */}
            <th>
              <div className='w-20 h-16 flex items-center justify-center'>
                <p className='text-center'>Asset type</p>
              </div>
            </th>
            {/* // --------------- ASSET */}
            <th>
              <div className='flex items-center  w-24 h-16'>
                <p>Asset</p>
              </div>
            </th>
            <th>
              <div className='flex items-center  w-24 h-16'>
                <p>Origem Sistema</p>
              </div>
            </th>
            <th>
              <div className='flex items-center  justify-center w-20 h-16 text-center'>
                <p>Resp.</p>
              </div>
            </th>
            <th>
              <div className='flex items-center  justify-center w-16 h-16'>
                <p>Aprovado</p>
              </div>
            </th>
            <th>
              <div className='flex items-center justify-center w-16 h-16'>
                <p>Ações</p>
              </div>
            </th>
          </div>
        </tr>
      </thead>
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
                        BooleanPerSecond('fast') ? 'bg-red-500' : 'bg-red-400'
                      } rounded-full w-2 h-2`}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className='text-brand-grey2 w-28 h-16 items-center flex justify-center'>
                    {item.alarm}
                  </div>
                </td>
                <td>
                  <div className='w-20 h-16 flex items-center justify-center'>
                    {item.assetType}
                  </div>
                </td>
                <td>
                  <div className='w-24 h-16 items-center  justify-center flex'>{item.asset}</div>
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
                      ref={(el) => (inputActionRefs.current[index] = el)}
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
                      ref={(el) => (inputRefs.current[index] = el)}
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
    </table>
  );
};

export default Table;
