import { useEffect, useRef, useState } from 'react';
import { ApiData } from './ApiData';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

export const Table = () => {
  const [data, setData] = useState(ApiData);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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

  return (
    <table className=' flex flex-col max-w-[733px] w-full'>
      <TableHead sortData={sortData} handleSort={handleSort} />
      <TableBody />
    </table>
  );
};

export default Table;
