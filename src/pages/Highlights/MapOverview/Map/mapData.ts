import { megaphone } from '../../../../components/icons/megaphone';
import { lightningbolt } from '../../../../components/icons/lightningbolt';
import { windmill } from '../../../../components/icons/windmillSVG';

export const charSection = [20, 20, 20, 20, 20];

export const colorSets = [
  ['#FFDE54', '#FFDE54', '#B1B9C3', '#B1B9C3', '#FFDE54'],
  ['#B1B9C3', '#F53E3E', '#B1B9C3', '#B1B9C3', '#B1B9C3'],
  ['#1FD3A6', '#1FD3A6', '#B1B9C3', '#1FD3A6', '#1FD3A6'],
  ['#FFDE54', '#FFDE54', '#B1B9C3', '#B1B9C3', '#FFDE54'],
  ['#1FD3A6', '#1FD3A6', '#1FD3A6', '#1FD3A6', '#1FD3A6']
];

export const statusText = ({
  windmillName,
  mwhValue,
  windmillQuantity,
  alertsQuantity
}: {
  windmillName: string;
  mwhValue: string;
  windmillQuantity: string;
  alertsQuantity: string;
}) => {
  return `
    <div style="
      font-size: 10px;
      gap: 2px;
      display: flex;
      flex-direction: column;
      padding: 5px;
      color: #0B1C2C;
    ">
      <p>${windmillName}</p>
      <div style="
        background-color: rgba(11, 28, 44, 0.2);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2px;
      ">
        ${windmill.small}
        <p style="margin-right: 2px">${windmillQuantity}</p>
        ${megaphone}
        <p>${alertsQuantity}</p>
      </div>
      <div style="
        background-color: rgba(11, 28, 44, 0.2);
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding: 2px;
      ">
        ${lightningbolt}
        <p>${mwhValue}% MWh</p>
      </div>
    </div>
  `;
};

export const data = [
  {
    name: 'Subparque 01',
    data: charSection,
    statusText: statusText({
      windmillName: 'Subparque 01',
      alertsQuantity: '01',
      mwhValue: '96',
      windmillQuantity: '06/10'
    })
  },
  {
    name: 'Subparque 02',
    data: charSection,
    statusText: statusText({
      windmillName: 'Subparque 01',
      alertsQuantity: '01',
      mwhValue: '96',
      windmillQuantity: '06/10'
    })
  },
  {
    name: 'Subparque 03',
    data: charSection,
    statusText: statusText({
      windmillName: 'Subparque 01',
      alertsQuantity: '01',
      mwhValue: '96',
      windmillQuantity: '06/10'
    })
  },
  {
    name: 'Subparque 04',
    data: charSection,
    statusText: statusText({
      windmillName: 'Subparque 01',
      alertsQuantity: '01',
      mwhValue: '96',
      windmillQuantity: '06/10'
    })
  },
  {
    name: 'Subparque 05',
    data: charSection,
    statusText: statusText({
      windmillName: 'Subparque 01',
      alertsQuantity: '01',
      mwhValue: '96',
      windmillQuantity: '06/10'
    })
  }
];
