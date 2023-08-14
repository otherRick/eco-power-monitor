interface AlarmDataProps {
  title: string;
  maxPercent: number;
  color: string;
}

export const AlarmData: AlarmDataProps[] = [
  {
    title: 'Operando',
    maxPercent: 88,
    color: '#17D79B'
  },
  {
    title: 'Sem sinal',
    maxPercent: 70,
    color: '#CFD4E5'
  },
  {
    title: 'Alarme',
    maxPercent: 60,
    color: '#E6C84C'
  },
  {
    title: 'Parado',
    maxPercent: 50,
    color: '#F42829'
  },
  {
    title: 'Outros',
    maxPercent: 50,
    color: '#FF7005'
  },
  {
    title: 'M Preventiva',
    maxPercent: 50,
    color: '#1B49E0'
  },
  {
    title: 'M corretiva',
    maxPercent: 40,
    color: '#FFC599'
  },
  {
    title: 'Ambiental',
    maxPercent: 30,
    color: '#CC5801'
  }
];
