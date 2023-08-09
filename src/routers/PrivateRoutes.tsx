import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { useLayout } from '../contexts/LayoutContext';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function PrivateRoutes() {
  const Highlights = lazy(() => import('../pages/Highlights/Highlights'));

  const { isSidebarExpanded } = useLayout();

  return (
    <Suspense>
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <div className={`flex w-full h-full flex-col ${!isSidebarExpanded && 'ml-[70px]'}`}>
            <Header />
            <main className='flex-1 sm:overflow-y-auto overflow-x-hidden custom-scrollbar'>
              <Routes>
                <Route path='/' element={<Highlights />} />
                <Route path='/highlights' element={<Highlights />} />

                <Route
                  path='*'
                  element={
                    <div className='h-screen flex-col flex items-center justify-center'>
                      <ExclamationTriangleIcon className='w-36 h-36' />
                      <p>Não autorizado</p>
                    </div>
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
