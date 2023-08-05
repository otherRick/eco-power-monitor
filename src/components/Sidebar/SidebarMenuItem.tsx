import { createElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLayout } from '../../contexts/LayoutContext';
import { IconType } from './SideBarMenuLinks';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  icon: IconType;
  title?: boolean | string;
  route: string;
  itemCounter: number | null;
  haveSubMenu?: boolean;
}

export function SidebarMenuItem({ haveSubMenu, icon, title, route, itemCounter }: Props) {
  const location = useLocation();
  const layout = useLayout();

  const isActive = location.pathname.startsWith(route);

  const content = (
    <div className='list-none '>
      <Link
        className={`flex items-center text-left text-sm ${
          isActive
            ? ' text-brand-grey7 font-medium gap-[20px] '
            : 'text-brand-grey7 hover:bg-red-500 hover:bg-opacity-20 hover:font-medium text-font-regular '
        }   transition-colors w-full gap-6 h-[50px] ${!layout && 'aspect-square'}`}
        to={route}
      >
        <div>
          {isActive && (
            <div className='bg-brand-primary rounded rounded-tr-full rounded-br-full w-[5px] h-[50px]'></div>
          )}
        </div>
        {createElement(icon, {
          className: `h-5 w-5 ${isActive ? 'text-brand-primary' : 'text-zinc-300'}`
        })}
        {title && (
          <div className='w-full justify-between flex'>
            <p className={`text-brand-grey7 text-md ${isActive && `text-zinc-800 font-bold`}`}>
              {title}
            </p>
            <div className='flex items-center'>
              {itemCounter && (
                <div className='bg-brand-grey12 mr-2 ml-2 rounded-lg w-8 h-6 items-center flex justify-center text-brand-wire02'>
                  <p className='text-sm'>{itemCounter}</p>
                </div>
              )}
              {title !== 'Configurações' && title !== 'Sair da conta' ? (
                haveSubMenu && isActive ? (
                  <ChevronDownIcon
                    className={`w-5 h-5 mr-6 ${isActive && `text-zinc-800 font-bold`} `}
                  />
                ) : (
                  <ChevronRightIcon
                    className={`w-5 h-5 mr-6 ${isActive && `text-zinc-800 font-bold`} `}
                  />
                )
              ) : null}
            </div>
          </div>
        )}
      </Link>
    </div>
  );

  return content;
}
