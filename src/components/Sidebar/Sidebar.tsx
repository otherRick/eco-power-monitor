import SidebarMenu from './SidebarMenu';
import { Divider } from '../Divider';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLayout } from '../../contexts/LayoutContext';

import { PowerTrackerIcon } from '../icons/powertracker';
import { useHovered } from './useHovered';

export default function Sidebar() {
  const { setIsSidebarExpanded, isSidebarExpanded } = useLayout();
  const { eventHandlers, hovered } = useHovered();

  return (
    <aside
      {...eventHandlers}
      className={`h-screen bg-white  flex flex-col ${
        isSidebarExpanded ? 'w-[300px]' : hovered ? 'w-[300px] absolute z-10' : 'w-[70px] absolute'
      } transition-all pt-5 z-10   border border-1 rounded-tr-xl  rounded-br-xl shadow-sm`}
    >
      <header
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        className='flex items-center cursor-pointer pl-7 justify-start mb-5'
      >
        <div className='flex gap-4 self-start'>
          <Bars3Icon className='w-5 h-5 text-zinc-300' />
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
          <PowerTrackerIcon /> <p className='text-white'>Power Tracker</p>
        </div>
      ) : (
        <div className='pb-5 pt-4 px-5 '>
          <PowerTrackerIcon />
        </div>
      )}
    </aside>
  );
}
