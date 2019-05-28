import { useRef, useEffect } from 'react';

export default (eventName, handler, element = global) => {
  const savedHandler = useRef();
  
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      console.log('in use effect, element : ', element);
      const eventListener = event => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      }
    },
    [eventName, element]
  );
}