import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

interface EventsLinksProps {
  icon: IconType;
  counter: number;
  counterText: string;
  description: string;
  content: ReactNode;
}

export const EventsLinks: EventsLinksProps[] = [
  {
    icon: ExclamationTriangleIcon,
    counter: 10,
    counterText: '',
    description: '',
    content: null
  },
  {
    icon: ExclamationTriangleIcon,
    counter: 10,
    counterText: '',
    description: '',
    content: null
  },
  {
    icon: ExclamationTriangleIcon,
    counter: 10,
    counterText: '',
    description: '',
    content: null
  }
];
