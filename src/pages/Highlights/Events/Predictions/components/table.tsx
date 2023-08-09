import { useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Scada } from '../../../../../components/icons/scada';
import { BooleanPerSecond } from '../../../../../Util';

export const Table = () => {
  const randomId = () => {
    return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  };

  const initialData = [
    {
      id: randomId(),
      status: true,
      alarm: 'Item C',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    },
    {
      id: randomId(),
      status: true,
      alarm: 'Item A',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    },
    {
      id: randomId(),
      status: true,
      alarm: 'Item B',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    },
    {
      id: randomId(),
      status: true,
      alarm: 'Item F',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    },
    {
      id: randomId(),
      status: true,
      alarm: 'Item D',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    },
    {
      id: randomId(),
      status: true,
      alarm: 'Item E',
      assetType: 'Molestie magna',
      asset: 'ABC-08-01',
      system: 'Environment',
      resp: 'Kira Madsen',
      approved: false,
      isChecked: false
    }
  ];

  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [checked, setChecked] = useState([]);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, data.length);
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

  const handleCheckboxChange = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
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

  return (
    <div className='max-w-[685px] overflow-x-auto'>
      <table className='w-full max-w-[816px]'>
        <thead className='bg-brand-grey10 w-full'>
          <tr className='text-brand-grey6 text-ms w-full gap-4 flex'>
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
              <div className='flex items-center w-24 h-16'>
                <p>Asset</p>
              </div>
            </th>
            <th>
              <div className='flex items-center w-24 h-16'>
                <p>Origem Sistema</p>
              </div>
            </th>
            <th>
              <div className='flex items-center justify-center w-20 h-16 text-center'>
                <p>Resp.</p>
              </div>
            </th>
            <th>
              <div className='flex items-center justify-center w-16 h-16'>
                <p>Aprovado</p>
              </div>
            </th>
            <th>
              <div className='flex items-center justify-center w-10 h-16'>
                <p>Ações</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {data.map((item, index: number) => {
            return (
              <tr
                className={`${
                  index % 2 && 'bg-brand-grey14'
                }  text-brand-grey6  text-ms font-medium w-full gap-4 flex`}
                key={item.id}
              >
                {/* // --------------- ALARME */}
                <td>
                  <div className='flex w-16 h-16 justify-center items-center'>
                    <p>{item.id}</p>
                  </div>
                </td>
                {/* // --------------- ALARME */}
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
                {/* // --------------- ALARME */}
                <td>
                  <div className='text-brand-grey2 w-28 h-16 items-center flex justify-center'>
                    {item.alarm}
                  </div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className='w-20 h-16 flex items-center justify-center'>
                    {item.assetType}
                  </div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className='w-24 h-16 items-center justify-center flex'>{item.asset}</div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className='w-24 h-16 items-center justify-center text-center flex'>
                    {item.system}
                  </div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className=' w-20 h-16 items-center flex text-center'>{item.resp}</div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className='w-16 h-16 justify-center items-center flex'>
                    <div
                      onClick={() => handleCheck(index)}
                      className={`${
                        !item.isChecked ? ' bg-red-500' : 'bg-blue-500'
                      } rounded-full w-6 h-6 cursor-pointer`}
                    >
                      {checked.includes(index) && <CheckIcon className='w-5 h-5' />}
                    </div>
                    <input
                      type='checkbox'
                      hidden
                      ref={(el) => (inputRefs.current[index] = el)}
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                </td>
                {/* // --------------- ALARME */}
                <td>
                  <div className='w-10 h-16 justify-center items-center flex '>
                    <div
                      onClick={() => handleCheck(index)}
                      className={`${
                        !item.isChecked ? ' bg-red-500' : 'bg-blue-500'
                      } rounded-full w-6 h-6 cursor-pointer`}
                    >
                      {checked.includes(index) && <CheckIcon className='w-5 h-5' />}
                    </div>
                    <input
                      type='checkbox'
                      hidden
                      ref={(el) => (inputRefs.current[index] = el)}
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
