import ProgressBar from '../../../../../../../components/ProgressBar';

interface DailyGoalChartTwoProps {
  goal: number;
}
export const DailyGoalChartTwo = ({ goal = 69 }: DailyGoalChartTwoProps) => {
  const stackedData = [
    { type: 'bar' as const, data: [60], color: '#E5E9EE' },
    { type: 'bar' as const, data: [30], color: '#F42829' }
  ];

  const plotLines: Highcharts.YAxisPlotLinesOptions[] = [
    {
      value: goal,
      dashStyle: 'Solid',
      color: '#0B1C2C',
      width: 3,
      zIndex: 5,
      label: {
        align: 'center',
        style: {
          color: 'red',
          fontWeight: 'bold',
          fontSize: '12px'
        }
      }
    }
  ];

  const positioner = () => {
    return { x: 0, y: -15 };
  };

  return (
    <ProgressBar
      barWidth={18}
      chartWidth={158}
      plotLines={plotLines}
      positioner={positioner}
      containerHeigh={'100%'}
      type='bar'
      hight='h-[35px]'
      stackedData={stackedData}
    />
  );
};
