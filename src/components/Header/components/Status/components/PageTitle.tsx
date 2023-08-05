import { useLocation } from 'react-router';

export const PageTitle = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <p className='text-xl '>
        {pathname.substring(1).charAt(0).toLocaleUpperCase() + pathname.substring(2)}
      </p>
    </div>
  );
};
