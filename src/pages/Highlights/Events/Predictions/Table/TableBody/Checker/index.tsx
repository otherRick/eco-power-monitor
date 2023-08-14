import { CheckIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';

export const CheckBox = ({ item, index, circle, setData, data }) => {
  const inputActionRefs = useRef<HTMLInputElement[] | never>([]);
  const [checkAction, setCheckAction] = useState([]);

  useEffect(() => {
    inputActionRefs.current = inputActionRefs.current.slice(0, data.length);
  }, [data]);

  const handleApproveChange = (id: number) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setData(updatedData);
  };
  //   const handleActionChange = (id: number) => {
  //     const updatedData = data.map((item) =>
  //       item.id === id ? { ...item, approved: !item.approved } : item
  //     );

  //     setData(updatedData);
  //   };

  // const handleCheck = (index) => {
  //   if (checked.includes(index)) {
  //     setChecked(checked.filter((item) => item !== index));
  //   } else {
  //     setChecked([...checked, index]);
  //   }
  //   inputRefs.current[index].click();
  // };

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

  // border border-solid w-7 h-7 cursor-pointer flex items-center justify-center

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
        ref={(el) => (inputActionRefs.current[index] = el)}
        checked={item.isChecked}
        onChange={() => handleApproveChange(item.id)}
      />
    </div>
  );
};
