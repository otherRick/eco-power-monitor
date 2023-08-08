import ProgressBar from '../../../../../../components/ProgressBar';
import { useLayout } from '../../../../../../contexts/LayoutContext';

export const AvailabilityChart = () => {
  const { isSidebarExpanded } = useLayout();

  //Here is the entracy for the API data
  const number = [40, 60, 85, 95, 50, 100];

  const stackedData = number.map((num) => ({
    data: [num],
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
        showLegend
        chartWidth={isSidebarExpanded ? 0 : 750}
        barWidth={86}
        plotLines={plotLines}
        hight='h-[100px]'
        viewAnnotantion={false}
        type='column'
        stackedData={stackedData}
      />
    </div>
  );
};
