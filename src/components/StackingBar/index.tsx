import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts';

export const StackingBar = () => {
  const options = {
    chart: {
      backgroundColor: '',
      colorByPoint: true,
      height: 250,
      width: 400,
      spacing: [0, 0, 0, 0],
      borderWidth: 0,
      plotBorderWidth: 0
    },
    title: {
      text: 'Alarmes mais acionados',
      align: 'left'
    },
    xAxis: {
      labels: {
        enabled: true,
        align: 'left',
        x: -90,
        y: 4
      },
      tickLength: 0,
      alternateGridColor: 'white',
      gridLineColor: ' #e6e6e6',
      gridLineWidth: 0,
      lineWidth: 0,
      categories: [
        'Operando',
        'Sem sinal',
        'Alarme',
        'Parado',
        'Outros',
        'M Preventiva',
        'M corretiva',
        'Ambiental'
      ]
    },
    yAxis: {
      gridLineColor: '#ECEDEF',
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      backgroundColor: 'red',
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          inside: true
        },
        pointWidth: 20
      }
    },
    series: [
      {
        type: 'bar',
        name: 'Ocorrências',
        data: [
          {
            color: '#ECEDEF',
            y: 20
          },
          {
            color: '#ECEDEF',
            y: 50
          },
          {
            color: '#ECEDEF',
            y: 70
          },
          {
            color: '#ECEDEF',
            y: 80
          },
          {
            color: '#ECEDEF',
            y: 80
          },
          {
            color: '#ECEDEF',
            y: 80
          },
          {
            color: '#ECEDEF',
            y: 90
          },
          {
            color: '#ECEDEF',
            y: 95
          }
        ],
        stack: 1,
        dataLabels: {
          enabled: true,
          format: '{y}',
          align: 'right',
          verticalAlign: 'right',
          x: 100,
          y: 0
        },
        stacking: 'normal'
      },
      {
        type: 'bar',
        name: 'Ocorrências',
        data: [
          {
            color: '#17D79B',
            y: 90
          },
          {
            color: '#CFD4E5',
            y: 60
          },
          {
            color: '#E6C84C',
            y: 40
          },
          {
            color: '#F42829',
            y: 30
          },
          {
            color: '#FF7005',
            y: 30
          },
          {
            color: '#1B49E0',
            y: 30
          },
          {
            color: '#FFC599',
            y: 20
          },
          {
            color: '#CC5801',
            y: 15
          }
        ],
        color: '#17D79B',
        stack: 1,
        dataLabels: {
          enabled: false,
          format: '{y}',
          align: 'right',
          verticalAlign: 'right',
          x: 10,
          y: 0
        },
        stacking: 'normal'
      }
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <div className='border border-brand-contour p-3 rounded-md h-96 items-center flex'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
