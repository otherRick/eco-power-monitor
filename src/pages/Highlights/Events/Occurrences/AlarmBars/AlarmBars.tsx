import ProgressBar from '../../../../../components/ProgressBar';

interface AlarmsBarsProps {
  color: string;
  title: string;
  value: number;
}

export const AlarmBars = ({ color, title, value }: AlarmsBarsProps) => {
  const stackedData = [
    { data: [100], color: '#E5E9EE', type: 'bar' as const },
    { data: [value], color: color, type: 'bar' as const }
  ];

  const positioner = () => {
    return { x: 0, y: -15 };
  };

  return (
    <div className='flex items-center justify-between w-full'>
      <p className=' text-sm text-brand-grey5 mt-4'>{title}</p>
      <div className='flex items-start justify-between'>
        <ProgressBar
          barWidth={20}
          chartWidth={200}
          containerHeigh={'60%'}
          positioner={positioner}
          type='bar'
          hight='h-[32px]'
          stackedData={stackedData}
        />
        <div className=' w-8'>
          <p className=' text-sm text-brand-grey8 mt-4 ml-2'>{value}%</p>
        </div>
      </div>
    </div>
  );
};
