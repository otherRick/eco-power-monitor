import { ArrowRightOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import { Divider } from '../Divider';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarMenuLinks } from './SidebarMenuLinks';
import { Link, useLocation } from 'react-router-dom';
import { useLayout } from '../../contexts/LayoutContext';

interface SidebarMenuProps {
  hovered: boolean;
}

export default function SidebarMenu({ hovered }: SidebarMenuProps) {
  const { pathname } = useLocation();
  const { isSidebarExpanded } = useLayout();
  const showTitle = hovered || isSidebarExpanded;

  const getSubmenuClass = (path: string) =>
    `font-medium ${
      pathname.includes(path) ? ' text-brand-primary underline' : ' text-brand-grey7'
    } text-sm`;

  return (
    <div className='h-full overflow-y-auto overflow-x-hidden justify-between flex flex-col custom-scrollbar'>
      <ul>
        {SidebarMenuLinks.map(({ icon, name, path, itemCounter, subMenu }) => (
          <li key={path}>
            <SidebarMenuItem
              haveSubMenu={subMenu.length > 0}
              icon={icon}
              route={path}
              itemCounter={itemCounter}
              title={showTitle && name}
            />
            <div className='pl-16 gap-1 flex flex-col '>
              {pathname.includes(path) && showTitle
                ? subMenu.map(({ subMenuName, subMenuPath }) => (
                    <Link key={subMenuPath} to={`${path}${subMenuPath}`}>
                      <p
                        className={`${getSubmenuClass(
                          subMenuPath
                        )} "text-brand-grey7 hover:text-brand-orange hover:text-opacity-20"   `}
                      >
                        {subMenuName}
                      </p>
                    </Link>
                  ))
                : null}
            </div>
          </li>
        ))}
      </ul>
      <ul className='flex flex-col w-full gap-1 mt-2'>
        {showTitle ? <Divider /> : null}
        <li>
          <SidebarMenuItem
            indicator={false}
            icon={Cog6ToothIcon}
            itemCounter={null}
            title={showTitle && 'Configurações'}
            route={'/settings'}
          />
        </li>
        <li>
          <SidebarMenuItem
            indicator={false}
            icon={ArrowRightOnRectangleIcon}
            itemCounter={null}
            title={showTitle && 'Sair da conta'}
            route={'/logout'}
          />
        </li>
      </ul>
    </div>
  );
}
