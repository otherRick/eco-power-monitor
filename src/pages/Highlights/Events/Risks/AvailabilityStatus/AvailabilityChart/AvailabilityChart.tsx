import ProgressBar, { StackedDataType } from '../../../../../../components/ProgressBar';

export const AvailabilityChart = () => {
  const number = [30, 40, 80, 80, 80, 60, 100];
  const stacks = number.map((num) => ({
    y: num,
    color: num >= 80 ? '#E5E9EE' : '#F42829'
  }));

  const plotLines: Highcharts.YAxisPlotLinesOptions[] = [
    {
      value: 89,
      dashStyle: 'Solid',
      color: '#1B49E0',
      width: 2,
      zIndex: 5
    },
    {
      value: 70,
      dashStyle: 'ShortDash',
      color: '#1B49E0',
      width: 2,
      zIndex: 5
    }
  ];

  return (
    <div className='p-6'>
      <ProgressBar
        xLegend={['00h - 03h', '04h - 07h', '08h - 12h', '13h - 16h', '17h - 20h', 'Agora']}
        xVisible
        chartWidth={750}
        barWidth={86}
        plotLines={plotLines}
        hight='h-[100px]'
        viewAnnotantion={false}
        type='column'
        stackedData={[{ data: stacks }] as StackedDataType}
      />
    </div>
  );
};
