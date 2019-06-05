import { useRef, useCallback, useEffect, useState } from 'react';
import useEventListener from './useEventListener';

export default ({ callback, element, time }) => {
  const [ timer, setTimer ] = useState(null);

  const handleMouseEnter = useCallback(e => {
    console.log('mouse enter!');

    const timeoutTimer = setTimeout(() => {
      console.log('timer ended');
      callback && callback();
    }, time);

    setTimer(timeoutTimer);
  }, [callback, element]);

  const handleMouseLeave = useCallback(e => {
    console.log('mouse leave!');
    clearTimeout(timer);
  }, [callback, element]);

  const handleMouseMove = useCallback(e => {
    console.log('mouse move!');
    clearTimeout(timer);
  }, [callback, element]);

  useEventListener('mouseenter', handleMouseEnter, element);
  useEventListener('mouseleave', handleMouseLeave, element);
  useEventListener('mousemove', handleMouseMove, element);
};

