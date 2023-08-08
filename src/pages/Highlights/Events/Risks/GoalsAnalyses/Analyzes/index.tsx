export const Analyzes = () => {
  return (
    <div className='flex justify-between p-6'>
      <div>
        <p className='text-ml'>Geração Baixa</p>
        <p className='text-md text-brand-grey5'>
          A geração do parque está muito abaixo da meta deste mês
        </p>
      </div>
      <button className='border w-28 h-10 items-center flex justify-center' title='Ver análises'>
        <p className='text-ms '> Ver análises</p>
      </button>
    </div>
  );
};