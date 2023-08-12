/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ProgressBar.tsx

import React from 'react';
import Highcharts, { SeriesOptionsType, TooltipPositionerCallbackFunction } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAnnotations from 'highcharts/modules/annotations';

HighchartsAnnotations(Highcharts);

interface ProgressBarProps {
  stackedData?: { data: number[]; color: string }[] & SeriesOptionsType[] & any;
  type?: string;
  hight?: string;
  barWidth?: number;
  dataLabels?: boolean;
  positioner?: TooltipPositionerCallbackFunction;
  chartWidth?: number;
  showLegend?: boolean;
  containerHeigh?: string;
  plotLines?: Highcharts.YAxisPlotLinesOptions[];
  viewAnnotantion?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  stackedData,
  type = 'bar',
  showLegend = false,
  dataLabels = false,
  plotLines,
  chartWidth = 0,
  positioner,
  containerHeigh = '100%',
  barWidth = 10,
  hight = 'h-[40px]'
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
      categories: ['03h- 00', '03h- 00', '03h- 00', '03h- 00', '03h- 00', '03h- 00'],
      visible: false
      // min: 0,
      // max: 5
    },
    yAxis: {
      min: 0,
      max: 100,
      allowDecimals: true,
      alternateGridColor: 'white',
      gridLineColor: ' #e6e6e6',
      gridLineWidth: 0,
      visible: plotLines,
      plotLines,
      labels: {
        enabled: false
      },
      title: {
        enabled: false
      }
    },
    legend: {
      enabled: false
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
        color: '#8A9197',
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

    series: stackedData.map(({ data, color }, index: number) => ({
      name: `Bar ${index + 1}`,
      data,
      color
    }))
  };

  return (
    <div className={`${hight}  items-end flex`}>
      <HighchartsReact
        containerProps={{ style: { height: containerHeigh } }}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default ProgressBar;
