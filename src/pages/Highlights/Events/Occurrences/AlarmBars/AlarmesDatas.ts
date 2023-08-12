interface AlarmesDatasProps {
  title: string;
  maxPercent: string;
  color: string;
}

export const AlarmesDatas: AlarmesDatasProps[] = [
  {
    title: 'Operando',
    maxPercent: '88%',
    color: '#17D79B'
  },
  {
    title: 'Sem sinal',
    maxPercent: '13%',
    color: '#CFD4E5'
  },
  {
    title: 'Alarme',
    maxPercent: '53%',
    color: '#E6C84C'
  },
  {
    title: 'Parado',
    maxPercent: '99%',
    color: '#F42829'
  },
  {
    title: 'Outros',
    maxPercent: '44%',
    color: '#FF7005'
  },
  {
    title: 'M Preventiva',
    maxPercent: '17%',
    color: '#1B49E0'
  },
  {
    title: 'M corretiva',
    maxPercent: '60%',
    color: '#FFC599'
  },
  {
    title: 'Ambiental',
    maxPercent: '30%',
    color: '#CC5801'
  }
];
