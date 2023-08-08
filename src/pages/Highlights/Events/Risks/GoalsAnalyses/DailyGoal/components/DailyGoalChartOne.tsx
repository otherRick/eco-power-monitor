import ProgressBar from '../../../../../../../components/ProgressBar';

interface DailyGoalChartTwoProps {
  goal: number;
}
export const DailyGoalChartOne = ({ goal }: DailyGoalChartTwoProps) => {
  const stackedData = [
    { data: [60], color: '#E5E9EE' },
    { data: [30], color: '#F42829' }
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
      type='bar'
      hight='h-[35px]'
      stackedData={stackedData}
    />
  );
};
