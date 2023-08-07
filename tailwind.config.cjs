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
          contour: '#CFD4E5',
          wire02: '#212429',
          grey2: '#0B1C2C',
          grey7: '#8E91A4',
          grey8: '#8C97A1',
          grey12: '#ECEDEF',
          grey14: '#F9F9F9'
        }
      }
    },
    fontSize: {
      xs: ['10px', '15px'],
      sm: ['12px', '18px'],
      md: ['16px', '22px']
    }
  }
};
