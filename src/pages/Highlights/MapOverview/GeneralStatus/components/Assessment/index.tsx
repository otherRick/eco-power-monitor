import { AssessmentBar } from './AssessmentBar';

export const Assessment = ({ avaliation = 2 }) => {
  const barHeights = [9, 12, 15, 18, 20];

  return (
    <div className='h-10 flex-col items-center flex p-1 pr-2'>
      <div className='flex'>
        <div className='gap-1 flex w-11 h-5 items-end'>
          {barHeights.map((height, index) => (
            <AssessmentBar key={height} avaliation={avaliation} index={index} height={height} />
          ))}
        </div>
      </div>
      <p className='text-brand-grey6 text-sm'>Avaliação</p>
    </div>
  );
};
