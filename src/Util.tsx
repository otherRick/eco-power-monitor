import { useCallback, useEffect, useState } from 'react';

export const BooleanPerSecond = (speed: 'fast' | 'normal' | 'slow') => {
  const [generateRandomBooleanEverySecond, setGenerateRandomBooleanEverySecond] = useState(false);
  const time = useCallback(() => {
    if (speed === 'slow') {
      return 1900;
    }
    if (speed === 'normal') {
      return 1500;
    }
    if (speed === 'fast') {
      return 1500;
    }
  }, [speed]);

  const speedSelector = time();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSecond = new Date().getSeconds();
      const isOddSecond = currentSecond % 2 !== 0;
      setGenerateRandomBooleanEverySecond(isOddSecond);
    }, time());

    return () => {
      clearInterval(intervalId);
    };
  }, [speedSelector, time]);

  return generateRandomBooleanEverySecond;
};
