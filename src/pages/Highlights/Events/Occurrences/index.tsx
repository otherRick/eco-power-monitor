import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { Accordion } from '../../../../components/Accordion';
import { AlarmBars } from './AlarmBars/AlarmBars';
import { AlarmData } from './AlarmBars/AlarmData';
import { DowntimesData } from './AlarmBars/DowntimesData';
import { DowntimesBars } from './AlarmBars/DowntimesBars';

export const Occurrences = () => {
  return (
    <div className='pt-4'>
      <Accordion
        description='no período selecionado'
        counter={22}
        counterText='Novas ocorrências'
        icon={MegaphoneIcon}
      >
        <div className='flex gap-4 w-full'>
          <div className='w-full'>
            <p className='text-brand-grey2 text-md'>Alarmes mais acionados</p>
            {AlarmData.map(({ title, maxPercent, color }) => (
              <AlarmBars key={title} title={title} value={maxPercent} color={color} />
            ))}
          </div>
          <div className='w-full'>
            <p className='text-brand-grey2 text-md'>Alarmes mais acionados</p>
            {DowntimesData.map(
              ({
                title,
                maxPercent,
                yellowValue,
                redValue,
                orangeValue,
                peachValue,
                targetPercent
              }) => (
                <DowntimesBars
                  key={title}
                  yellowValue={yellowValue}
                  redValue={redValue}
                  orangeValue={orangeValue}
                  peachValue={peachValue}
                  targetPercent={targetPercent}
                  title={title}
                  value={maxPercent}
                />
              )
            )}
          </div>
        </div>
      </Accordion>
    </div>
  );
};
