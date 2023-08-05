import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLayout } from '../../contexts/LayoutContext';
import { ItemArrow } from './components/ItemArrow';

interface Props {
  icon: ReactNode;
  title?: boolean | string;
  route: string;
}

export function SidebarMenuItem({ icon, title, route }: Props) {
  const location = useLocation();
  const layout = useLayout();

  const isActive = location.pathname.startsWith(route);

  const content = (
    <li className='list-none '>
      <Link
        className={`flex items-center text-left text-sm ${
          isActive
            ? ' text-zinc-400 font-medium gap-[20px] '
            : 'text-zinc-400 hover:bg-red-500 hover:bg-opacity-20 hover:font-medium text-font-regular '
        }   transition-colors w-full gap-6 h-[50px] ${!layout && 'aspect-square'}`}
        to={route}
      >
        <div>
          {isActive && (
            <div className='bg-brand-primary rounded rounded-tr-full rounded-br-full w-[5px] h-[50px]'></div>
          )}
        </div>
        {icon}
        {layout.isSidebarExpanded ? (
          <ItemArrow selected={isActive} title={title} />
        ) : (
          title && <ItemArrow selected={isActive} title={title} />
        )}
      </Link>
    </li>
  );

  return content;
}
