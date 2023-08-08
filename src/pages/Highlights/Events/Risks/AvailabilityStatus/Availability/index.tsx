export const Availability = () => {
  return (
    <div className='flex justify-between p-6'>
      <div>
        <p className='text-ml'>Disponibilidade</p>
        <p className='text-md text-brand-grey5'>
          O parque está tendo muitas quedas de disponibilidade
        </p>
      </div>
      <button className='border w-28 h-10 items-center flex justify-center' title='Ver análises'>
        <p className='text-ms '>Verificar WTGS</p>
      </button>
    </div>
  );
};
