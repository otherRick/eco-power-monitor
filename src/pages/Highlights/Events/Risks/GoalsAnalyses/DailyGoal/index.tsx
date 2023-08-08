import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { DailyGoalChartOne } from './components/DailyGoalChartOne';
import { DailyGoalChartTwo } from './components/DailyGoalChartTwo';

interface DailyGoal {
  firstGoal: number;
  secondGoal: number;
}

export const DailyGoal = ({ firstGoal = 0, secondGoal = 0 }) => {
  return (
    <div className='flex items-center gap-4  justify-between  p-6'>
      <div className=' gap-1.5 flex flex-col'>
        <p className='text-ms'>Valor atual</p>
        <p className='text-lg'>60.5 Mwh</p>
      </div>
      <div className='flex flex-col self-end'>
        <div className='flex gap-2'>
          <ArrowTrendingDownIcon className='w-5 h-5 text-brand-red2 ' />
          <p className=' text-brand-red2 text-md'>24 %</p>
        </div>
        <p className='text-brand-grey8 text-ms'>VS PREV. 30 DIAS</p>
      </div>
      <div className='flex'>
        <div className='h-14 w-40'>
          <p className='text-sm'>Meta diária: {secondGoal}</p>
          <DailyGoalChartOne goal={secondGoal < 365 ? secondGoal / 4 : 88} />
        </div>
        <div className='h-14 w-40'>
          <p className='text-sm'>Meta diária: {firstGoal}</p>
          <DailyGoalChartTwo goal={firstGoal < 365 ? firstGoal / 4 : 88} />
        </div>
      </div>
    </div>
  );
};
