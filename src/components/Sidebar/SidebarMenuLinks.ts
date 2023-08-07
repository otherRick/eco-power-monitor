import {
  ArrowTrendingDownIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardIcon,
  MapIcon,
  MegaphoneIcon
} from '@heroicons/react/20/solid';

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

interface SubMenuDataType {
  subMenuName: string;
  subMenuPath: string;
}

interface SideBarMenuLinksType {
  name: string;
  path: string;
  icon: IconType;
  itemCounter: number | null;
  subMenu: SubMenuDataType[];
}

export const SidebarMenuLinks: SideBarMenuLinksType[] = [
  {
    name: 'Highlights',
    path: '/highlights',
    icon: MapIcon,
    itemCounter: null,
    subMenu: []
  },
  {
    name: 'Ocorrências',
    path: '/occurrences',
    icon: MegaphoneIcon,
    itemCounter: null,
    subMenu: [
      {
        subMenuName: 'Overview',
        subMenuPath: '/overview'
      },
      {
        subMenuName: 'Tabela detalhada',
        subMenuPath: '/table-detail'
      },
      {
        subMenuName: 'Gráfico timeline',
        subMenuPath: '/timeline-chart'
      }
    ]
  },
  {
    name: 'Performance',
    path: '/performance',
    icon: ChartBarIcon,
    itemCounter: null,
    subMenu: []
  },
  {
    name: 'Energy Losses',
    path: '/energy-Losses',
    icon: ArrowTrendingDownIcon,
    itemCounter: null,
    subMenu: []
  },
  {
    name: 'Analitcs',
    path: '/analitcs',
    icon: BeakerIcon,
    itemCounter: 22,
    subMenu: []
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: ClipboardIcon,
    itemCounter: 22,
    subMenu: []
  }
];
