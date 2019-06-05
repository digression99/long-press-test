import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [ isHovered, setIsHovered ] = useState(false);

  const handleMouseEnter = useCallback(e => {
    console.log('mouse entered!');
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(e => {
    console.log('mouse left!');
    setIsHovered(false);
  }, []);

  return [];
};