import ProgressBar from '../../../../../../../components/ProgressBar';
import { useLayout } from '../../../../../../../contexts/LayoutContext';

export const AvailabilityChart = () => {
  const { isSidebarExpanded } = useLayout();
  const number = [20, 10, 20, 10, 20, 10];
  const stackedData = [
    { data: [number[0]], color: number[0] <= 19 ? '#E5E9EE' : '#F42829' },
    { data: [number[1]], color: '#FFC599' },
    { data: [number[2]], color: '#FF7005' },
    { data: [number[3]], color: '#F42829' },
    { data: [number[4]], color: '#E6C84C' },
    { data: [number[5]], color: '#E6C84C' }
  ];

  return (
    <ProgressBar
      showLegend
      chartWidth={isSidebarExpanded ? 0 : 750}
      barWidth={86}
      hight='96'
      viewAnnotantion={false}
      type='column'
      stackedData={stackedData}
    />
  );
};
