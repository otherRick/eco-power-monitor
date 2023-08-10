import { useLocation } from 'react-router';

export const PageTitle = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <p className='text-xl text-brand-wire02 '>
        {pathname.substring(1).charAt(0).toLocaleUpperCase() + pathname.substring(2)}
      </p>
    </div>
  );
};
