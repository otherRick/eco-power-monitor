import { Divider } from '../../../../../components/Divider';
import { Analyzes } from './Analyzes';
import { DailyGoal } from './DailyGoal';

export const GoalsAnalyses = () => {
  //Here I set the APi entrace for the goals
  const firstGoal = 200.09;
  const secondGoal = 329.09;

  return (
    <div className='border border-brand-contour rounded-md gap-4  items-center'>
      <Analyzes />
      <Divider />
      <DailyGoal secondGoal={secondGoal} firstGoal={firstGoal} />
    </div>
  );
};
