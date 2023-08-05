import { useMemo, useState } from 'react';

export const useHovered = () => {
  const [hovered, setHovered] = useState(false);

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      }
    }),
    [setHovered]
  );

  return {
    eventHandlers,
    hovered
  };
};
