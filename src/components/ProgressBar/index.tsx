// src/components/ProgressBar.tsx

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAnnotations from 'highcharts/modules/annotations';

HighchartsAnnotations(Highcharts);

interface ProgressBarProps {
  stackedData: { data: number[]; color: string }[];
  type: string;
  hight: string;
  barWidth: number;
  dataLabels: boolean;
  positioner: () => void;
  chartWidth?: number;
  showLegend: boolean;
  plotLines: Highcharts.YAxisPlotLinesOptions[];
  viewAnnotantion: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  stackedData,
  type = 'bar',
  showLegend = false,
  dataLabels = false,
  plotLines,
  chartWidth = 0,
  positioner,
  barWidth = 10,
  hight = '10'
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: type,
      // backgroundColor: 'rgba(255, 0, 0, 0.3)',
      spacing: [0, 0, 0, 0],
      // margin: [0, 0, 0, 0],
      borderWidth: 0,
      height: 0,
      plotBorderWidth: 0,
      width: chartWidth
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Progress'],
      visible: false
    },
    yAxis: {
      min: 0,
      max: 100,
      allowDecimals: false,
      alternateGridColor: 'white',
      gridLineColor: ' #e6e6e6',
      gridLineWidth: 0,
      visible: true,
      plotLines,
      labels: {
        enabled: false
      },
      title: {
        enabled: false
      }
    },

    plotOptions: {
      bar: {
        stacking: 'normal',
        dataLabels: {
          enabled: dataLabels,
          format: '{y}%'
        }
      },
      series: {
        pointWidth: barWidth,
        groupPadding: 1
      },
      line: {
        visible: true
      }
    },
    legend: {
      enabled: showLegend,
      // labelFormat: 'name',
      labelFormatter: function () {
        return '03-00h';
      },
      itemStyle: {
        color: 'red',
        cursor: 'pointer',
        fontSize: '0.75em',
        fontWeight: 'bold',
        textOverflow: 'ellipsis'
      },
      symbolRadius: 0,
      symbolHeight: 0,
      symbolWidth: 0,
      itemDistance: 47,
      borderWidth: 0,
      itemWidth: 0,
      padding: 0,
      margin: 10,
      align: 'center',
      alignColumns: true,
      width: '100%',
      x: 25
    },
    tooltip: {
      enabled: true,
      shape: 'callout',
      positioner,
      distance: 19,
      padding: 0
    },
    credits: {
      enabled: false
    },

    series: stackedData.map(({ data, color }, index) => ({
      name: `Bar ${index + 1}`,
      data,
      color
    }))
  };

  return (
    <div className={`h-${hight} items-end flex`}>
      <HighchartsReact
        containerProps={{ style: { height: '100%' } }}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default ProgressBar;
