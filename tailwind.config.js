/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7005',
          primary: '#FF7D1A',
          primary_light: '#FFE2CC',
          secondary: '#EFF2F4',
          contour: '#CFD4E5'
        }
      }
    },
    fontSize: {
      xs: ['10px', '15px']
    }
  },
  plugins: []
};
