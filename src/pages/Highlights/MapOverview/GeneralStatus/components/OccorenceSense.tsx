interface OccorenceSenseProps {
  occurences: number;
}

export const OccorenceSense = ({ occurences }: OccorenceSenseProps) => {
  return (
    <div className='flex flex-col px-2 items-start border-l border-brand-grey7'>
      <div className='flex items-end gap-1 justify-center'>
        <p className='text-brand-grey2 text-ml'>{occurences}</p>
        <p className='text-brand-grey6 text-sm'>novas</p>
      </div>
      <p className='text-brand-grey6 text-sm'>Ocorrencias</p>
    </div>
  );
};
