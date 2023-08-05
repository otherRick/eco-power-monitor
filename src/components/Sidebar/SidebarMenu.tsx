import { SidebarMenuItem } from './SidebarMenuItem';
import { Divider } from '../Divider';

import {
  ArrowTrendingDownIcon,
  BeakerIcon,
  ChartBarIcon,
  MapIcon,
  SpeakerWaveIcon
} from '@heroicons/react/20/solid';
import {
  ArrowRightOnRectangleIcon,
  ClipboardIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { useLayout } from '../../contexts/LayoutContext';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

interface SidebarMenuProps {
  hovered: boolean;
}

export default function SidebarMenu({ hovered }: SidebarMenuProps) {
  const { isSidebarExpanded } = useLayout();
  const { pathname } = useLocation();

  const showTitle = hovered || isSidebarExpanded;

  return (
    <div className='h-full overflow-y-auto overflow-x-hidden justify-between flex flex-col custom-scrollbar'>
      <ul className='flex flex-col w-full gap-2 mt-2'>
        <SidebarMenuItem
          icon={
            <MapIcon
              className={`h-5 w-5 ${
                pathname === '/highlights' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Highlights'}
          route='/highlights'
        />
        <SidebarMenuItem
          icon={
            <SpeakerWaveIcon
              className={` h-5 w-5 ${
                pathname === '/occurrences' ||
                pathname === '/overview' ||
                pathname === '/table-details' ||
                pathname === '/chart-timelime'
                  ? 'text-brand-primary'
                  : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Ocorrências'}
          route={'/occurrences'}
        />
        {pathname === '/occurrences' ||
        pathname === '/overview' ||
        pathname === '/table-details' ||
        pathname === '/chart-timelime' ? (
          <>
            {showTitle && (
              <li className=' w-2/3 self-center flex flex-col gap-2 pl-2'>
                <ul>
                  <Link to={'/overview'}>
                    <p
                      className={`font-medium ${
                        pathname === '/overview'
                          ? ' text-brand-primary underline'
                          : ' text-zinc-400'
                      } text-sm`}
                    >
                      Overview
                    </p>
                  </Link>
                </ul>
                <ul>
                  <Link to={'/table-details'}>
                    <p
                      className={`font-medium ${
                        pathname === '/table-details'
                          ? ' text-brand-primary underline'
                          : ' text-zinc-400'
                      } text-sm`}
                    >
                      Tabela detalhada
                    </p>
                  </Link>
                </ul>
                <ul>
                  <Link to={'/chart-timelime'}>
                    <p
                      className={`font-medium ${
                        pathname === '/chart-timelime'
                          ? ' text-brand-primary underline'
                          : ' text-zinc-400'
                      } text-sm`}
                    >
                      Gráfico timeline
                    </p>
                  </Link>
                </ul>
              </li>
            )}
          </>
        ) : null}
        <SidebarMenuItem
          icon={
            <ChartBarIcon
              className={` h-5 w-5 ${
                pathname === '/performance' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Performace'}
          route={'/performance'}
        />
        <SidebarMenuItem
          icon={
            <ArrowTrendingDownIcon
              className={` h-5 w-5 ${
                pathname === '/Energy-Losses' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Energy Losses'}
          route={'/Energy-Losses'}
        />
        <SidebarMenuItem
          icon={
            <BeakerIcon
              className={` h-5 w-5 ${
                pathname === '/analitcs' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Análises'}
          route={'/analitcs'}
        />
        <SidebarMenuItem
          icon={
            <ClipboardIcon
              className={` h-5 w-5 ${
                pathname === '/reports' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Relatórios'}
          route={'/reports'}
        />
      </ul>
      <ul className='flex flex-col w-full gap-1 mt-2'>
        {isSidebarExpanded ? <Divider /> : hovered ? <Divider /> : null}

        <SidebarMenuItem
          icon={
            <Cog6ToothIcon
              className={` h-5 w-5 ${
                pathname === '/settings' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Configurações'}
          route={'/settings'}
        />
        <SidebarMenuItem
          icon={
            <ArrowRightOnRectangleIcon
              className={` h-5 w-5 ${
                pathname === '/logout' ? 'text-brand-primary' : 'text-zinc-300'
              }`}
            />
          }
          title={showTitle && 'Sair da conta'}
          route={'/logout'}
        />
      </ul>
    </div>
  );
}
