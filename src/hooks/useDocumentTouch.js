import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';

export default () => {
  const [ isDocumentTouched, setIsDocumentTouched ] = useState(false);

  const handleDocumentTouchEnd = useCallback(e => {
    setIsDocumentTouched(true);
  }, []);

  const handleDocumentTouchStart = useCallback(e => {
    setIsDocumentTouched(false);
  }, []);

  const handleDocumentMouseDown = useCallback(e => {
    setIsDocumentTouched(false);
  }, []);

  useEventListener('touchend', handleDocumentTouchEnd, document);
  useEventListener('touchstart', handleDocumentTouchStart, document);
  useEventListener('mousedown', handleDocumentMouseDown, document);

  return isDocumentTouched;
};

