import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Highcharts from 'highcharts';
import { windmell } from '../../../../../components/icons/windmillSVG';
import { megaphone } from '../../../../../components/icons/megaphone';
import { lightningbolt } from '../../../../../components/icons/lightningbolt';

const charSection = [20, 20, 20, 20, 20];

const colorSets = [
  ['#FFDE54', '#FFDE54', '#B1B9C3', '#B1B9C3', '#FFDE54'],
  ['#B1B9C3', '#F53E3E', '#B1B9C3', '#B1B9C3', '#B1B9C3'],
  ['#1FD3A6', '#1FD3A6', '#B1B9C3', '#1FD3A6', '#1FD3A6'],
  ['#FFDE54', '#FFDE54', '#B1B9C3', '#B1B9C3', '#FFDE54'],
  ['#1FD3A6', '#1FD3A6', '#1FD3A6', '#1FD3A6', '#1FD3A6']
];

export const Map = () => {
  const mapRef = useRef(null);
  const chartRefs = useRef([]);

  const data = [
    {
      name: 'Subparque 01',
      data: charSection,
      statusText: `<div style="font-size: 10px; gap: 2px; display: flex; flex-direction: column; padding: 5px; color: #0B1C2C"><p>Subparque 01</p> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 2px"> ${windmell.small}  <p style="margin-right: 2px"> 08/10</p>  ${megaphone} <p> 19 </p> </div> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: start; align-items: center; padding: 2px">${lightningbolt} <p> 90% Mh</p></div></div>`
    },
    {
      name: 'Subparque 02',
      data: charSection,
      statusText: `<div style="font-size: 10px; gap: 2px; display: flex; flex-direction: column; padding: 5px; color: #0B1C2C"><p>Subparque 02</p> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 2px"> ${windmell.small}  <p style="margin-right: 2px"> 08/10</p>  ${megaphone} <p> 10 </p> </div> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: start; align-items: center; padding: 2px">${lightningbolt} <p> 89% Mh</p></div></div>`
    },
    {
      name: 'Subparque 03',
      data: charSection,
      statusText: `<div style="font-size: 10px; gap: 2px; display: flex; flex-direction: column; padding: 5px; color: #0B1C2C"><p>Subparque 03</p> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 2px"> ${windmell.small}  <p style="margin-right: 2px"> 08/10</p>  ${megaphone} <p> 22 </p> </div> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: start; align-items: center; padding: 2px">${lightningbolt} <p> 77% Mh</p></div></div>`
    },
    {
      name: 'Subparque 04',
      data: charSection,
      statusText: `<div style="font-size: 10px; gap: 2px; display: flex; flex-direction: column; padding: 5px; color: #0B1C2C"><p>Subparque 04</p> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 2px"> ${windmell.small}  <p style="margin-right: 2px"> 08/10</p>  ${megaphone} <p> 01 </p> </div> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: start; align-items: center; padding: 2px">${lightningbolt} <p> 100% Mh</p></div></div>`
    },
    {
      name: 'Subparque 05',
      data: charSection,
      statusText: `<div style="font-size: 10px; gap: 2px; display: flex; flex-direction: column; padding: 5px; color: #0B1C2C"><p>Subparque 05</p> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 2px"> ${windmell.small}  <p style="margin-right: 2px"> 08/10</p>  ${megaphone} <p> 07 </p> </div> <div style="background-color:rgba(11, 28, 44, 0.2); display: flex; flex-direction: row; justify-content: start; align-items: center; padding: 2px">${lightningbolt} <p> 68% Mh</p></div></div>`
    }
  ];

  useEffect(() => {
    const map = (mapRef.current = L.map('map').setView([-3.530094, -38.889987], 14));

    map.setMinZoom(11);
    map.setMaxZoom(16);

    map.zoomControl.remove();
    L.control
      .zoom({
        position: 'bottomleft'
      })
      .addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const markerCoordinates = [
      // amaerlo
      { lat: -3.539094, lng: -38.878987 },
      // vermelhjo
      { lat: -3.533094, lng: -38.909987 },
      // verder easy
      { lat: -3.517094, lng: -38.915987 },
      // amarelo 2
      { lat: -3.541094, lng: -38.895987 },
      // verde full``
      { lat: -3.524094, lng: -38.889987 }
    ];

    data.forEach((seriesData, index) => {
      const chartOptions = {
        annotations: [
          {
            draggable: '',
            labels: [
              {
                useHTML: true,
                point: {
                  x: 145,
                  y: 127
                },
                shape: 'rect',
                padding: 0,
                backgroundColor: 'none',
                borderWidth: 0,
                verticalAlign: 'middle',
                style: {
                  fontSize: '1px'
                },
                text: windmell.normal
              }
            ]
          },
          {
            draggable: '',
            labels: [
              {
                useHTML: true,
                point: {
                  x: 235,
                  y: 160
                },
                shape: 'rect',
                padding: 0,
                backgroundColor: 'none',
                borderWidth: 0,
                verticalAlign: 'bottom',
                style: {
                  fontSize: '1px'
                },
                text: seriesData.statusText
              }
            ]
          }
        ],
        chart: {
          type: 'pie',
          backgroundColor: ''
        },
        title: {
          text: ''
        },
        plotOptions: {
          series: {
            borderWidth: 1,
            borderColor: '#0B1C2C',
            colorByPoint: true,
            type: 'pie',
            size: '20%',
            innerSize: '65%',
            dataLabels: {
              enabled: false,
              crop: false,
              distance: '-10%',
              style: {
                fontWeight: 'bold',
                fontSize: '10px'
              },
              connectorWidth: 0
            }
          }
        },
        series: [
          {
            name: seriesData.name,
            data: seriesData.data.map((value, i) => ({
              y: value,
              color: colorSets[index % colorSets.length][i]
            }))
          }
        ],
        credits: {
          enabled: false
        }
      };

      const chartDiv = document.createElement('div');
      chartDiv.style.width = '310px';
      chartDiv.style.height = '250px';

      const chart = Highcharts.chart(chartDiv, chartOptions);
      chartRefs.current[index] = chart;

      const customIcon = L.divIcon({
        className: 'custom-icon',
        html: chartDiv,
        iconAnchor: [100, 75]
      });

      L.marker([markerCoordinates[index].lat, markerCoordinates[index].lng], {
        icon: customIcon,
        title: seriesData.name
      }).addTo(map);
    });

    return () => {
      map.remove();
      chartRefs.current.forEach((chart) => chart.destroy());
    };
  }, []);

  return <div id='map' style={{ width: '100%', height: '100%', zIndex: 0 }} />;
};
