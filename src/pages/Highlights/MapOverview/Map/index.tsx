import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Highcharts, { Options } from 'highcharts';
import { colorSets, data } from './mapData';
import { windmill } from '../../../../components/icons/windmillSVG';

export type ChartType = [{ destroy: () => void }] | [];

export const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const chartRefs = useRef<ChartType>([]);

  useEffect(() => {
    mapRef.current = L.map('map').setView([-3.530094, -38.889987], 14);
    const map = mapRef.current!;

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
      { lat: -3.539094, lng: -38.878987 },
      { lat: -3.533094, lng: -38.909987 },
      { lat: -3.517094, lng: -38.915987 },
      { lat: -3.541094, lng: -38.895987 },
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
                text: windmill.normal
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

      const chart = Highcharts.chart(chartDiv, chartOptions as unknown as Options);
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
    const chartRef = chartRefs.current;

    return () => {
      map.remove();
      chartRef.forEach((chart) => chart.destroy());
    };
  }, []);

  return <div id='map' style={{ width: '100%', height: '100%', zIndex: 0 }} />;
};
