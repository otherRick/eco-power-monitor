import { Events } from './components/Events';

export default function Highlights() {
  return (
    <div className='flex h-full w-full flex-1'>
      <div className='text-red-600 w-full justify-center flex flex-1'>
        <div className='bg-white w-full  h-fit p-2 m-5 rounded-md'>
          <p>Home do melhor teste que eu já fiz</p>
        </div>
      </div>
      <div className='bg-white w-full flex flex-col flex-1 '>
        <div className='px-4 gap-4 flex flex-col'>
          <Events />
        </div>
      </div>
    </div>
  );
}
