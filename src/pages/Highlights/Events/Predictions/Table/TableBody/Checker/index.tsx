import { CheckIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';
import { ApiDataType } from '../../ApiData';

interface CheckBoxProps {
  item: ApiDataType;
  index: number;
  circle: boolean;
  setData: (data: ApiDataType[]) => void;
  data: ApiDataType[];
}

export const CheckBox = ({ item, index, circle, setData, data }: CheckBoxProps) => {
  const inputActionRefs = useRef<HTMLInputElement[] | never>([]);
  const [checkAction, setCheckAction] = useState<number[]>([]);

  useEffect(() => {
    inputActionRefs.current = inputActionRefs.current.slice(0, data.length);
  }, [data]);

  const handleApproveChange = (id: number) => {
    const updatedData: ApiDataType[] = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setData(updatedData);
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
    <div className='w-16 h-16 justify-center items-center flex'>
      <div
        onClick={() => handleCheckAction(index)}
        className={`${item.isChecked && circle && 'bg-brand-green2'}  ${
          circle && 'rounded-full'
        } w-6 h-6 cursor-pointer border border-brand-grey9 flex items-center justify-center`}
      >
        {checkAction.includes(index) && <CheckIcon className='w-5 h-5 text-white font-bold' />}
      </div>
      <input
        type='checkbox'
        hidden
        ref={(el) => (inputActionRefs.current[index] = el!)}
        checked={item.isChecked}
        onChange={() => handleApproveChange(item.id)}
      />
    </div>
  );
};
