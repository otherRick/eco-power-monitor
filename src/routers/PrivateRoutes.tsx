import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { useLayout } from '../contexts/LayoutContext';

export default function PrivateRoutes() {
  const Highlights = lazy(() => import('../pages/Highlights/Highlights'));

  const { isSidebarExpanded } = useLayout();

  return (
    <Suspense>
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <div className={`${!isSidebarExpanded && 'ml-[70px]'}`}>
            <Header />
            <main className='w-full h-full sm:overflow-y-auto overflow-x-hidden custom-scrollbar'>
              <Routes>
                <Route path='/' element={<Highlights />} />
                <Route path='/highlights' element={<Highlights />} />

                <Route path='*' element={<div>Não autorizado</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
