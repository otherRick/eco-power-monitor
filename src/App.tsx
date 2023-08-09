import LayoutContextProvider from './contexts/LayoutContext';
import Routes from './routers';

function App() {
  return (
    <div className='bg-brand-secondary flex-1'>
      <LayoutContextProvider>
        <Routes />
      </LayoutContextProvider>
    </div>
  );
}

export default App;
