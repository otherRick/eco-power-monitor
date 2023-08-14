import ProgressBar from '../../../../../components/ProgressBar';

interface DowntimesBarsProps {
  title: string;
  value: string;
  yellowValue: number;
  redValue: number;
  orangeValue: number;
  peachValue: number;
  targetPercent: number;
}

export const DowntimesBars = ({
  title,
  value,
  yellowValue,
  redValue,
  orangeValue,
  peachValue,
  targetPercent
}: DowntimesBarsProps) => {
  const stackedData = [
    { type: 'bar' as const, data: [targetPercent], color: '#ECEDEF' },
    { type: 'bar' as const, data: [peachValue], color: '#FFC599' },
    { type: 'bar' as const, data: [orangeValue], color: '#FF7005' },
    { type: 'bar' as const, data: [redValue], color: '#F42829' },
    { type: 'bar' as const, data: [yellowValue], color: '#E6C84C' }
  ];

  const positioner = () => {
    return { x: 0, y: -15 };
  };

  return (
    <div className='flex items-center w-full'>
      <p className='pr-2 text-sm text-brand-grey5 mt-4'>{title}</p>
      <ProgressBar
        barWidth={20}
        chartWidth={200}
        containerHeigh={'60%'}
        positioner={positioner}
        type='bar'
        hight='h-[32px]'
        stackedData={stackedData}
      />
      <p className='pr-2 text-sm text-brand-grey8 mt-4 ml-2'>{value}</p>
    </div>
  );
};
