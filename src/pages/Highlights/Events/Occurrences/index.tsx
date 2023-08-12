import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { Accordion } from '../../../../components/Accordion';
import { StackingBar } from '../../../../components/StackingBar';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts';
import ProgressBar from '../../../../components/ProgressBar';
import { AlarmBars } from './AlarmBars/AlarmBars';
import { AlarmesDatas } from './AlarmBars/AlarmesDatas';
import { DowntimesData } from './AlarmBars/DowntimesData';
import { DowntimesBars } from './AlarmBars/DowntimesBars';

// const options = {
//   chart: {
//     type: 'bar'
//   },
//   title: {
//     text: null
//   },
//   xAxis: {
//     labels: {
//       enabled: false
//     },
//     tickLength: 0,
//     lineWidth: 0,
//     categories: [
//       'Categoria 1',
//       'Categoria 2',
//       'Categoria 2',
//       'Categoria 2',
//       'Categoria 2',
//       'Categoria 2'
//     ]
//   },
//   yAxis: {
//     title: {
//       text: null
//     },
//     labels: {
//       enabled: false
//     },
//     gridLineWidth: 0
//   },
//   legend: {
//     enabled: false
//   },
//   plotOptions: {
//     series: {
//       dataLabels: {
//         enabled: false,
//         stacking: 'normal',
//         inside: true
//       },
//       pointWidth: 20
//     }
//   },
//   series: [
//     {
//       data: [12],
//       stack: 1,
//       color: '#17D79B',
//       dataLabels: {
//         enabled: true,
//         format: '{y}',
//         align: 'right',
//         verticalAlign: 'rigth',
//         x: 60,
//         y: 0
//       },
//       stacking: 'normal'
//     },
//     {
//       data: [12],
//       stack: 1,
//       color: '#179B',
//       dataLabels: {
//         enabled: false,
//         format: '{x}',
//         align: 'left',
//         verticalAlign: 'left',
//         x: -10,
//         y: 0
//       },
//       stacking: 'normal'
//     },
//     {
//       data: [12],
//       stack: 2,
//       color: '#D79B',
//       dataLabels: {
//         enabled: true,
//         format: '{y}',
//         align: 'right',
//         verticalAlign: 'rigth',
//         x: 60,
//         y: 0
//       },
//       stacking: 'normal'
//     },
//     {
//       data: [12],
//       stack: 2,
//       color: '#79B',
//       dataLabels: {
//         enabled: false,
//         format: '{y}',
//         align: 'right',
//         verticalAlign: 'rigth',
//         x: 60,
//         y: 0
//       },
//       stacking: 'normal'
//     }
//   ]
// };

export const Occurrences = () => {
  return (
    <div className='pt-4'>
      <Accordion
        description='no período selecionado'
        counter={22}
        counterText='Novas ocorrências'
        icon={MegaphoneIcon}
      >
        {/* <div className='border border-brand-contour p-3 rounded-md '>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div> */}
        <div className='flex gap-4 w-full'>
          <div className='w-full'>
            <p className='text-brand-grey2 text-md'>Alarmes mais acionados</p>
            {AlarmesDatas.map(({ title, maxPercent, color }) => (
              <AlarmBars key={title} title={title} value={maxPercent} color={color} />
            ))}
          </div>
          <div className='w-full'>
            <p className='text-brand-grey2 text-md'>Alarmes mais acionados</p>
            {DowntimesData.map(
              ({
                title,
                maxPercent,
                yellowValue,
                redValue,
                orangeValue,
                peachValue,
                targetPercent
              }) => (
                <DowntimesBars
                  key={title}
                  yellowValue={yellowValue}
                  redValue={redValue}
                  orangeValue={orangeValue}
                  peachValue={peachValue}
                  targetPercent={targetPercent}
                  title={title}
                  value={maxPercent}
                />
              )
            )}
          </div>
        </div>
        {/* <StackingBar /> */}
      </Accordion>
    </div>
  );
};
