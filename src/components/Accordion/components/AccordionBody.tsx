import { ReactNode } from 'react';

interface AccordionBodyProps {
  shiftAccordion: boolean;
  children: ReactNode;
}

export const AccordionBody = ({ shiftAccordion, children }: AccordionBodyProps) => {
  return (
    <div
      className={`border border-brand-contour p-3 gap-4 flex flex-col items-center justify-center  max-w-[733.5px] ${
        shiftAccordion
          ? 'transition-opacity ease-in-out duration-500 opacity-100'
          : 'opacity-0 hidden'
      }`}
    >
      {children}
    </div>
  );
};
