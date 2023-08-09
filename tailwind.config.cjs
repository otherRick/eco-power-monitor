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
          blue2: '#1B49E0',
          red2: '#F42829',
          grey2: '#0B1C2C',
          grey5: '#615E69',
          grey6: '#77757F',
          grey7: '#8E91A4',
          grey8: '#8C97A1',
          grey10: '#D6DCE3',
          grey11: '#E5E9EE',
          grey12: '#ECEDEF',
          grey14: '#F9F9F9'
        }
      }
    },
    fontSize: {
      xs: ['10px', '15px'],
      sm: ['12px', '18px'],
      ms: ['14px', '20px'],
      md: ['16px', '22px'],
      ml: ['20px', '27px'],
      lg: ['28px', '30px']
    }
  }
};
