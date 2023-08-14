export const Availability = () => {
  return (
    <div className='flex justify-between p-6'>
      <div>
        <p className='text-ml'>Disponibilidade</p>
        <p className='text-md text-brand-grey5'>
          O parque está tendo muitas quedas de disponibilidade
        </p>
      </div>
      <button
        className='border p-2 h-10 items-center  hover:bg-brand-grey10 hover:bg-opacity-20 flex justify-center'
        title='Ver análises'
      >
        <p className='text-ms '>Verificar WTGS</p>
      </button>
    </div>
  );
};
