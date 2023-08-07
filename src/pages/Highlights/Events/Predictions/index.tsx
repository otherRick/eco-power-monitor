import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { Accordion } from '../../../../components/Accordion';

export const Predictions = () => {
  return (
    <div className='pt-4'>
      <Accordion
        description='no período selecionado'
        counter={10}
        counterText='Alertas preditivos'
        icon={HandRaisedIcon}
      >
        <div className='border border-brand-contour p-3 rounded-md '>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil laborum dolorum
            beatae cupiditate, deserunt alias blanditiis neque! Facilis nobis ratione repellendus
            distinctio veritatis sequi sunt fugiat officia voluptatem quam.
          </p>
        </div>
        <div className='border border-brand-contour p-3 rounded-md'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil laborum dolorum
            beatae cupiditate, deserunt alias blanditiis neque! Facilis nobis ratione repellendus
            distinctio veritatis sequi sunt fugiat officia voluptatem quam.
          </p>
        </div>
        <div className='border border-brand-contour p-3 rounded-md'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil laborum dolorum
            beatae cupiditate, deserunt alias blanditiis neque! Facilis nobis ratione repellendus
            distinctio veritatis sequi sunt fugiat officia voluptatem quam.
          </p>
        </div>
      </Accordion>
    </div>
  );
};
