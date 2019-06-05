import { useRef, useEffect } from 'react';

export default (eventName, handler, element) => {
  const savedHandler = useRef();
  
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element.current && element.current.addEventListener;
      if (!isSupported) return;

      const eventListener = event => savedHandler.current(event);
      element.current.addEventListener(eventName, eventListener);

      return () => {
        element.current.removeEventListener(eventName, eventListener);
      }
    },
    [eventName, element.current]
  );
}