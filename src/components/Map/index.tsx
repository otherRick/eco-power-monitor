import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import topology from '@highcharts/map-collection/custom/europe.topo.json';
import './style.css';

const newData = [
  ['fr', 43.86, 2.2, 'Paris'],
  ['fr', 48.86, 2.2, 'Paris'],
  ['fr', 45.86, 1.2, 'Paris'],
  ['fr', 45.86, 5.2, 'Paris']
];

async function getTemp(point, countries, capitals) {
  const json = await fetch(
    'https://api.met.no/weatherapi/locationforecast/2.0/?' + `lat=${point[1]}&lon=${point[2]}`
  ).then((response) => response.json());

  const temp = json.properties.timeseries[0].data.instant.details.air_temperature,
    value = parseInt(temp, 10);

  const country = {
    'hc-key': point[0],
    value
  };
  const capital = {
    name: point[3],
    lat: point[1],
    lon: point[2],
    colorKey: 'y',
    y: Number.isInteger(value) ? value : null,
    custom: {
      label: Number.isInteger(value)
        ? `${value}℃`
        : '<span style="font-weight: normal; opacity: 0.5">N/A</span>'
    }
  };

  countries.addPoint(country);
  capitals.addPoint(capital);
}

const options = {
  chart: {
    map: topology,
    events: {
      load: function () {
        const countries = this.series[0],
          capitals = this.series[1];
        newData.forEach((elem) => getTemp(elem, countries, capitals));
      }
    }
  },
  mapView: {
    center: [0, 45],
    // fitToGeometry: true,
    maxZoom: 1000,
    zoom: true
  },
  series: [
    {
      type: 'map',
      borderColor: 'red',
      borderWidth: 10
    }
  ],

  // title: {
  //   text: "Categories of European capitals",
  //   floating: true,
  //   style: {
  //     textOutline: "5px contrast",
  //   },
  // },

  // subtitle: {
  //   text: "Map markers in Highcharts",
  //   floating: true,
  //   y: 36,
  //   style: {
  //     textOutline: "5px contrast",
  //   },
  // },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      alignTo: 'spacingBox',
      verticalAlign: 'bottom'
    }
  },

  // mapView: {
  //   padding: [0, 0, 85, 0],
  // },

  // legend: {
  //   floating: true,
  //   backgroundColor: "#ffffffcc",
  // },

  // plotOptions: {
  //   mappoint: {
  //     keys: ["id", "lat", "lon", "name", "y"],
  //     marker: {
  //       lineWidth: 1,
  //       lineColor: "#000",
  //       symbol: "mapmarker",
  //       radius: 8,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //   },
  // },

  tooltip: {
    headerFormat: '<p>aisodjaisodjoiasjfoisdjfjois</p>',
    pointFormat: '<p>aisodjaisodjoiasjfoisdjfjois</p>'
  },

  series: [
    {
      type: 'map',
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: false
    },
    {
      name: 'Capitals of Europe',
      type: 'mappoint',
      showInLegend: false,
      marker: {
        // lineWidth: 1,
        // lineColor: "#000",
      },
      dataLabels: {
        useHTML: true,
        format:
          '<div class="abc"><div class="bcd"></div><div><div>Wind Turbine</div><div>current energy: 150e/h</div></div></div>'
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{xDescription}, {point.temp}°C.'
        }
      }
    }
  ]
};

export const Map = () => {
  return (
    <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />
  );
};
