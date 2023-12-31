import SidebarMenu from './SidebarMenu';
import { Divider } from '../Divider';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLayout } from '../../contexts/LayoutContext';

import { EcoPowerMonitorIcon } from '../icons/powertracker';
import { useHovered } from './useHovered';

export default function Sidebar() {
  const { setIsSidebarExpanded, isSidebarExpanded } = useLayout();
  const { eventHandlers, hovered } = useHovered();

  return (
    <aside
      {...eventHandlers}
      className={`h-screen bg-white  flex flex-col ${
        isSidebarExpanded
          ? 'max-w-[300px] w-full'
          : hovered
          ? 'w-[300px] absolute z-40 '
          : 'w-[70px] absolute'
      } transition-all z-10 border border-1 rounded-tr-xl rounded-br-xl shadow-sm`}
    >
      <header
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        className='flex max-h-[54px] h-full cursor-pointer pl-6 justify-start'
      >
        <div className='flex gap-4 self-start h-full items-center'>
          <Bars3Icon className='w-6 h-6 text-zinc-300' />
          {(isSidebarExpanded || hovered) && (
            <p className='text-brand-grey7 text-md'>
              {isSidebarExpanded ? 'Fechar Menu' : 'Fixar Menu'}
            </p>
          )}
        </div>
      </header>

      {(isSidebarExpanded || hovered) && <Divider />}
      <SidebarMenu hovered={hovered} />

      {isSidebarExpanded || hovered ? (
        <div className='bg-zinc-900 h-10 rounded-br-xl flex gap-4 pt-4 px-5 pb-8'>
          <EcoPowerMonitorIcon /> <p className='text-white text-md'>EcoPower Monitor</p>
        </div>
      ) : (
        <div className='pb-5 pt-4 px-5 '>
          <EcoPowerMonitorIcon />
        </div>
      )}
    </aside>
  );
}
