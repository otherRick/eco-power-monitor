import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { useLayout } from '../contexts/LayoutContext';
import Highlights from '../pages/Highlights';
import LandingPage from '../pages/landingPage';

export default function PrivateRoutes() {
  const { isSidebarExpanded } = useLayout();

  return (
    <Suspense>
      <BrowserRouter>
        <div className='flex h-screen flex-1'>
          <Sidebar />
          <div
            className={`flex transition-all w-full flex-col ${!isSidebarExpanded && 'ml-[70px]'}`}
          >
            <Header />
            <main className='flex-[15_15_0%] sm:overflow-y-auto overflow-x-hidden custom-scrollbar'>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/highlights' element={<Highlights />} />

                <Route
                  path='*'
                  element={
                    <div className='h-screen flex-col flex bg-brand-blue1 items-center justify-center'>
                      <p className='text-brand-grey14 text-lg'>Under Construction</p>
                      <img
                        src='../../src/assets/under-construction.gif'
                        alt='under-construction'
                      />
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
