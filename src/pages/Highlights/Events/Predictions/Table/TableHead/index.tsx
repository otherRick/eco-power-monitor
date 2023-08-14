import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface TableHeadProps {
  sortData: () => void;
  handleSort: () => void;
}

export const TableHead = ({ sortData, handleSort }: TableHeadProps) => {
  return (
    <thead className='w-full max-w-[733px]'>
      <tr>
        <div className='w-full bg-brand-grey10 text-brand-grey6 text-ms gap-4 flex'>
          <th>
            <div className='w-16 h-16 flex items-center gap-4 justify-center'>
              <p>ID</p>
              <button onClick={sortData}>
                <ChevronUpDownIcon className='w-4 h-4' />
              </button>
            </div>
          </th>
          <th>
            <div>
              <p className='w-16 h-16 flex items-center'>Origem Status</p>
            </div>
          </th>
          <th>
            <div className='w-28 h-16 text-center items-center flex gap-4 '>
              Alarme
              <button onClick={handleSort}>
                <ChevronUpDownIcon className='w-4 h-4' />
              </button>
            </div>
          </th>
          <th>
            <div className='w-20 h-16 flex items-center justify-center'>
              <p className='text-center'>Asset type</p>
            </div>
          </th>
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
  );
};
