import { ReactNode, useState } from 'react';
import { AccordionHeader } from './components/AccordionHeader';
import { AccordionBody } from './components/AccordionBody';
import { IconType } from '../Sidebar/SidebarMenuLinks';

interface AccordionProps {
  counter: number;
  counterText: string;
  icon: IconType;
  children: ReactNode;
  description: string;
}

export const Accordion = ({
  counter,
  counterText,
  icon,
  children,
  description
}: AccordionProps) => {
  const [shiftAccordion, setShiftAccordion] = useState(false);

  const handleAccordion = () => {
    setShiftAccordion(!shiftAccordion);
  };

  return (
    <div>
      <AccordionHeader
        counter={counter}
        counterText={counterText}
        description={description}
        icon={icon}
        onClick={handleAccordion}
        toggleAccordion={shiftAccordion}
      />
      <AccordionBody shiftAccordion={shiftAccordion}>{children}</AccordionBody>
    </div>
  );
};
