import { Assessment } from './components/Assessment';
import { useBooleanPerSecond } from '../../../../util';
import { DevicesSense } from './components/DevicesSense';
import { WindSense } from './components/WindSense';
import { OccorenceSense } from './components/OccorenceSense';
import { TagSense } from './components/TagSense';

interface GeneralStatusProps {
  farmSite: string;
}

export const GeneralStatus = ({ farmSite }: GeneralStatusProps) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  const avaliation = useBooleanPerSecond('normal') ? randomNumber : randomNumber;

  return (
    <div className='bg-white hidden rounded-md max-w-[582px] w-full shadow-xl gap-5 lg:flex flex-col justify-between p-3  top-20 absolute z-30'>
      <div className='flex items-center justify-between'>
        <p className='text-brand-grey2 text-ml w-60'>{farmSite}</p>

        <div className='flex'>
          {/* avaliation is an entrance for avaliation level, currently it's mocked accepting a dynamic number */}
          <Assessment avaliation={avaliation} />
          <DevicesSense currentDevices={48} totalDevices={60} />
          <WindSense />
          <OccorenceSense occurences={44} />
        </div>
      </div>
      <div className='flex justify-start gap-2'>
        <TagSense title='Sem Sinal' value='02' />
        <TagSense title='Parado' value='03' tagColor='red' />
        <TagSense title='M. Corretiva' value='19' tagColor='orange' />
        <TagSense title='Alarme' value='02' tagColor='yellow' />
      </div>
    </div>
  );
};
